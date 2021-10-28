import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/CinemaBaseIcon.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmbd-logo" />
        </Link>
        <a href="https://developers.themoviedb.org/3/getting-started/introduction">
          <TMDBLogoImg src={TMDBLogo} alt="tbmd-logo" />
        </a>
      </Content>
    </Wrapper>
  );
}
