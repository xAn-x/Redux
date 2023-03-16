const {featureAdded,featureRemoved} =require('./actionTypes');

let lastCount=0;

// Reducer is a pure function that takes the current state of store and action and according to type of action returns a new store
// NOTE:Reducer is a pure function so rather than modifying store it return a newStore
// Reducer directly talk with the store to update the store 
const reducer=(features=[],action)=>{
  switch (action.type) {
    case featureAdded:
      return [
        ...features,
        {id:++lastCount,description:action.payload.description}
      ]
    case featureRemoved:
      return features.filter(bug=>bug.id!=action.payload.id)
    default:
      return features;
  }
}

module.exports=reducer;