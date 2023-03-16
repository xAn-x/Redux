const redux=require('redux');
const reducer=require('./reducer.js');
const {addBug,removeBug,resolveBug}=require('./actionCreaters')

// createStore function takes reducer as an input and create a store using it
const createStore=redux.createStore;
const store=createStore(reducer);

console.log(`store: `,store,'\n')

// getState()=>Use to get the current state of the store
console.log(`initial state of store: `,store.getState(),'\n')


// subscribe()=>invoke whenever the state of store changes
const unsubscribe=store.subscribe(()=>console.log("State of store: ",store.getState()));

// dispatch(action)=>is a method that store uses in order to dispatch actions
store.dispatch(addBug("Bug-1"))

store.dispatch(addBug("Bug-2"))

store.dispatch(addBug("Bug-3"))

store.dispatch(resolveBug(1))

store.dispatch(removeBug(2))


// Once we don we should unsubscribe from the store
unsubscribe()





