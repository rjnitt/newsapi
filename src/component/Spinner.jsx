import React, { Component } from "react";
import spinner from "./Basketball.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
