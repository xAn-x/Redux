const redux = require("redux");
const bugsReducer = require("./Bugs/reducer");
const featuresReducer = require("./Features/reducer");

const {addBug, removeBug,resolveBug} =require('./Bugs/actionCreaters');
const {addFeature, removeFeature} =require('./Features/actionCreaters');

// combineReducer is function that we use when we have multiple reducers in our programme 
const combineReducer = redux.combineReducers;
const createStore = redux.createStore;

// combine reducer take a object containing all reducers
const rootReducer = combineReducer({
  bugs: bugsReducer,
  features: featuresReducer,
});


const store = createStore(rootReducer);

console.log("\n\n*******************************************************************\n\nInitial state: ",store.getState());

const unsubscribe=store.subscribe(()=>console.log('State of store: ',store.getState(),'\n'));

store.dispatch(addBug("Bug-1"))
store.dispatch(addBug("Bug-2"))

store.dispatch(addFeature("Feature-1"))
store.dispatch(addFeature("Feature-2"))

store.dispatch(addBug("Bug-3"))
store.dispatch(addFeature("Feature-3"))

store.dispatch(resolveBug(1))
store.dispatch(removeBug(2))

store.dispatch(removeFeature(1))



