import React from "react";
import { ImagePlaceholderWrapper } from "./styled";
import { ReactComponent as EmptyPicture } from "../../images/EmptyPicture.svg";
import { ReactComponent as Camera } from "../../images/Camera.svg";
import { ReactComponent as StarSvg } from "../../images/Star.svg";

const ImagePlaceholder = ({ type = "person", ...props }) => {
  let PlaceholderSVG;

  if (type === "movie" || type === "movieTile") {
    PlaceholderSVG = Camera;
  } else if (type === "star") {
    PlaceholderSVG = StarSvg;
  } else {
    PlaceholderSVG = EmptyPicture;
  }

  return (
    <ImagePlaceholderWrapper type={type} {...props}>
      <PlaceholderSVG />
    </ImagePlaceholderWrapper>
  );
};

export default ImagePlaceholder;
