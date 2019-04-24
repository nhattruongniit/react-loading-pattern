import React from "react";

import { connect } from "react-redux";
function LoadingContainer({ isFetching }) {
  if (isFetching) {
    return <h1>.....LOADING</h1>;
  }
  return null;
}

const mapStateToProps = (state: any) => {
  const {
    loading: { isFetching }
  } = state;
  return {
    isFetching
  };
};

export default connect(
  mapStateToProps,
  null
)(LoadingContainer);
