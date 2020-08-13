import React from "react"
import styled from "styled-components"

import IntroIllustration from "../images/illustration-intro.png"

export default function Cta({ siteTitle }) {
  return (
    <Header>
      <img
        style={{ width: "500px" }}
        src={IntroIllustration}
        alt="All your files in one secure location."
      />
      <HeaderContent>
        <h1>
          All your files in one secure locaiton,
          <br />
          accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with
          <br />
          friends family, and co-workers.
        </p>
        <HeaderButton>Get Started</HeaderButton>
      </HeaderContent>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const HeaderContent = styled.div`
  margin: 2rem 0;

  & p {
    margin: 1.5rem 0;
  }
`

const HeaderButton = styled.button``
