import React from "react";
import star from "../../images/Star.svg";

const StarSVG = ({ width = "24px", height = "24px" }) => {
  return <img src={star} alt="Star" style={{ width, height }} />;
};

export default StarSVG;
