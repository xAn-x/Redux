import { buyIceCream } from "./iceCreamType";
const initialState = {
  numberOfIceCream: 15,
};
const iceCreamReducer = (store = initialState, action) => {
  switch (action.type) {
    case buyIceCream:
      return { ...store, numberOfIceCream: store.numberOfIceCream - 1 };
    default:
      return store;
  }
};

export default iceCreamReducer;