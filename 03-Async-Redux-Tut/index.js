const redux=require('redux');
// Redux-thunk is a middleware that helps us in making an sunc request
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios');

const createStore=redux.createStore;
const applyMiddleware=redux.applyMiddleware;

// INITIAL Store State
const initialState={
  // use to display the loading spiner
  loading:false,
  // will hold list of user
  data:[],
  // use to display error if something went wrong
  error:"",
}

// Action-Types
const FETCH_USERS_REQUEST ='FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS';
const FETCH_USERS_FAIL ='FETCH_USERS_FAIL';


// ACTIONS_CREATORS
const fetchUsersRequest=()=>({type:FETCH_USERS_REQUEST})
const fetchUserSuccess=(data)=>({type:FETCH_USERS_SUCCESS,payload:{data}})
const fetchUserFail=(errorMsg)=>({type:FETCH_USERS_FAIL,payload:{errorMsg}})


// REDUCER
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_USERS_REQUEST:
      return ({loading:true,data:[],error:""})
    case FETCH_USERS_SUCCESS:
      return ({loading:false,data:action.payload.data,error:""})
    case FETCH_USERS_FAIL:
      return ({loading:false,data:[],error:action.payload.errorMsg})
    default:
      return state;
  }
}

// Async-Action-Creator

// Whenever our action creator returns a function thunk middleware passes it the dispatch method as argument and thus we can make async request and thunk will handle everything else
const fetchUsers=()=>{
  return function (dispatch){
    dispatch(fetchUsersRequest());
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>{
      const userData=response.data.map(user=>({id:user.id,name:user.name}));
      dispatch(fetchUserSuccess(userData));
    })
    .catch(error=>{
      dispatch(fetchUserFail(error.message));
    })
  }
}


const store=createStore(reducer,applyMiddleware(thunkMiddleware));
const unSubscribe=store.subscribe(()=>console.log('State of store: ',store.getState(),'\n'));
store.dispatch(fetchUsers());