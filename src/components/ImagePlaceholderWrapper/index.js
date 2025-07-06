import React from "react";
import { ImagePlaceholderWrapper } from "./styled";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { ReactComponent as Camera } from "../../images/Camera.svg";

const ImagePlaceholder = ({ type = "person", ...props }) => {
  const PlaceholderSVG = type === "movie" ? Camera : EmptyPicture;

  return (
    <ImagePlaceholderWrapper type={type} {...props}>
      <PlaceholderSVG />
    </ImagePlaceholderWrapper>
  );
};

export default ImagePlaceholder;
