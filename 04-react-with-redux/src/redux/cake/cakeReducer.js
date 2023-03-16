import * as actions from './cakeType';

const initialState={
  numberOfCakes:10
}
const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case actions.buyCake:
      return {
        ...state,
        numberOfCakes:state.numberOfCakes-1
      } 
    default:
      return state;
  }
}

export default reducer;