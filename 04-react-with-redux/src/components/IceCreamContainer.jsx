import React from "react";
import { buyIceCream } from "./../redux/index";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  const btnStyle = {
    width: "150px",
    height: "30px",
    border: "none",
    backgroundColor: "wheat",
    fontWeight: "bold",
    boxShadow: "4px 5px 3px black",
  };
  return (
    <div>
      <h1>Number of IceCream: {props.numberOfIceCream}</h1>
      <button
        type="button"
        style={btnStyle}
        onClick={() => props.buyIceCream()}
      >
        Buy IceCream
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numberOfIceCream: state.iceCream.numberOfIceCream,
});

const dispatchStateToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(IceCreamContainer);
