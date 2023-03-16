import React from "react";

import { useSelector, useDispatch } from "react-redux";

/* 
useSelector => works similar to mapStateToProps and use to handle state of the redux-store
            => takes a function as an argument and return the mapped state


            
useDispatch => works similar to dispatchStateToProps and use to handle dispatchFunctionality in redux store
            => return refrence to dispatch function of redux store.
*/

// Contains all our actionCreators
import { buyCake } from "../redux/index";

// props here would also contain the propeties that we have sent throught mapStateToProps ,and actionCreators from dispatchStatetoprops
function HookCakeContainer() {
  const btnStyle = {
    width: "100px",
    height: "30px",
    border: "none",
    backgroundColor: "wheat",
    fontWeight: "bold",
    boxShadow: "4px 5px 3px black",
  };

  const numOfCakes = useSelector(
    (redux_state) => redux_state.cake.numberOfCakes
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes-{numOfCakes} </h1>
      <button
        style={btnStyle}
        type="button"
        onClick={() => dispatch(buyCake())}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HookCakeContainer;
