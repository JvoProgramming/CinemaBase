import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";
import SearchBar from "./SearchBar";

export default function Home() {
  const { state, loading, error, setSearchTerm } = useHomeFetch();

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
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </>
  );
}
