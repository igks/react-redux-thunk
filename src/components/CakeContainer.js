import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
