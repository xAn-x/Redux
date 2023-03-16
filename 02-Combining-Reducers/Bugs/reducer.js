const {bugAdded,bugRemoved,bugResolved} =require('./actionTypes');

let lastCount=0;

// Reducer is a pure function that takes the current state of store and action and according to type of action returns a new store
// NOTE:Reducer is a pure function so rather than modifying store it return a newStore
// Reducer directly talk with the store to update the store 
const reducer=(bugs=[],action)=>{
  switch (action.type) {
    case bugAdded:
      return [
        ...bugs,
        {id:++lastCount,description:action.payload.description,resolved:false}
      ]
    case bugResolved:
      return bugs.map(bug=>bug.id!=action.payload.id ? bug : {...bug,resolved:true})
    case bugRemoved:
      return bugs.filter(bug=>bug.id!=action.payload.id)
    default:
      return bugs;
  }
}

module.exports=reducer;