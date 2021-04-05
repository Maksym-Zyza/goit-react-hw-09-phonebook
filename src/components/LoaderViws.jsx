import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const ViwsLoader = () => {
  return (
    <div className="loaderViws">
      <PropagateLoader loading={true} color={"red"} />
    </div>
  );
};

export default ViwsLoader;
