const {bugAdded,bugRemoved,bugResolved} =require('./actionTypes');

let lastCount=0;

// Reducer is a pure function that takes the current state of store and action and according to type of action returns a new store
// NOTE:Reducer is a pure function so rather than modifying store it return a newStore
// Reducer directly talk with the store to update the store 
const reducer=(store=[],action)=>{
  switch (action.type) {
    case bugAdded:
      return [
        ...store,
        {id:++lastCount,description:action.payload.description,resolved:false}
      ]
    case bugResolved:
      return store.map(bug=>bug.id!=action.payload.id ? bug : {...bug,resolved:true})
    case bugRemoved:
      return store.filter(bug=>bug.id!=action.payload.id)
    default:
      return store;
  }
}

module.exports=reducer;