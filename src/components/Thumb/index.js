import React from "react";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieID, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
