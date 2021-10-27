import React, { useState, useEffect } from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

export default function Home() {
  const { state, loading, error } = useHomeFetch();

  //Optimizing when passing in props
  const firstResult = state.results[0];

  console.log(state);

  return (
    <>
      {firstResult ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstResult.backdrop_path}`}
          title={firstResult.original_title}
          text={firstResult.overview}
        />
      ) : null}
    </>
  );
}
