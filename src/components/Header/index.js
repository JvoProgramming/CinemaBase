import React from "react";

import RMDBLogo from "../../images/CinemaBaseIcon.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="rmbd-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tbmd-logo" />
      </Content>
    </Wrapper>
  );
}
