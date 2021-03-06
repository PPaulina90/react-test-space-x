import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <Loader
      type="TailSpin"
      color="#BBC6CE"
      height={150}
      width={150}
      timeout={500}
      className="loader"
    />
  );
};

export default Loading;
