import React from "react";

// connect help us in connecting our redux-store to our commponent
import { connect } from "react-redux";


// Contains all our actionCreators
import {buyCake} from "../redux/index";


// props here would also contain the propeties that we have sent throught mapStateToProps ,and actionCreators from dispatchStatetoprops
function CakeContainer(props) {
  const btnStyle = {
    width: "100px",
    height: "30px",
    border: "none",
    backgroundColor: "wheat",
    fontWeight: "bold",
    boxShadow: "4px 5px 3px black",
  };
  // console.log("CackeContainer: ",props);
  return (
    <div>
      <h1>Number of Cakes-{props.numberOfCakes} </h1>
      <button style={btnStyle} type="button" onClick={()=>props.buyCake()}>
        Buy Cake
      </button>
    </div>
  );
}

// This is a function that will map our store-state and help us in accessing it
// this state properties will be present to us as props in our container
// the second argument is the props that we passed for our component and can be used inside if wanted..
const mapStateToProps = (state,ownProps)=>{
  return {
    numberOfCakes: state.cake.numberOfCakes
  }
}


// This is a function that will help us in dispatching our actions
// It takes ownProps as its second parameter so we can use them if required
const dispatchStateToProps = (dispatch,ownProps)=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}

// This is how we connect our redux store to our cake-Container
export default connect(mapStateToProps,dispatchStateToProps)(CakeContainer);
