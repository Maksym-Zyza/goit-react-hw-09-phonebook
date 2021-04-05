import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <div className="loaderDiv">
      <PropagateLoader loading={true} color={"red"} />
    </div>
  );
};

export default Loader;
