import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.div``

const Card = styled.div``

const PopUp = styled.div`
  font-family: "Inconsolata", monospace;
  font-size: 1.13em;
  font-weight: bold;
  border: 2px black solid;

  -webkit-transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  -o-transition: all 100ms ease-in;
  transition: all 100ms ease-in;

  -webkit-box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);

  flex: 1 0 500px;
  box-sizing: border-box;
  margin: 2rem 1em;

  letter-spacing: 0.075em;
  padding: 10px;

  position: relative;
  align-self: center;
  text-transform: uppercase;
  z-index: 1;

  transform-origin: left bottom;

  transform: translate(4px, -4px);

  // SIDE BOTTOM
  &:before,
  &:after {
    transition: all 100ms ease-in;

    border: 2px black solid;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }
  // SIDE
  &:before {
    border-right: 0;
    left: -8px;
    top: 1px;
    width: 4px;

    height: 100%;
    transform: skewY(-45deg);
    background: repeating-linear-gradient(
      0deg,
      Silver 0px,
      Silver 7px,
      Black 7px,
      Black 10px
    );
  }

  // BOTTOM
  &:after {
    border-top: 0;
    bottom: -8px;
    right: 1px;
    height: 4px;
    width: 100%;

    transform: skewX(-45deg);
    background: repeating-linear-gradient(
      90deg,
      Grey 0px,
      Grey 7px,
      Black 7px,
      Black 10px
    );
  }

  &:hover {
    -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);

    transform: translate(0px, 0px);

    // SIDE
    &:before {
      left: -4px;
      top: -1px;
      width: 0em;
    }

    // BOTTOM
    &:after {
      bottom: -4px;
      right: -1px;

      height: 0em;
    }
  }
`

const Btn = styled(Link)`
  font-family: "Inconsolata", monospace;
  font-size: 1.13em;
  font-weight: bold;
  border: 2px black solid;
  text-decoration: none;
  color: black;

  -webkit-transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  -o-transition: all 100ms ease-in;
  transition: all 100ms ease-in;

  -webkit-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.75);

  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.075em;
  padding: 4px;
  margin: auto 2px;
  position: relative;
  align-self: center;
  text-transform: uppercase;
  z-index: 1;

  transform-origin: left bottom;
  // SIDE BOTTOM
  &:before,
  &:after {
    transition: all 100ms ease-in;

    border: 2px black solid;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }
  // SIDE
  &:before {
    border-right: 0;
    left: -4px;
    top: -1px;
    width: 0em;
    height: 100%;
    transform: skewY(-45deg);
    border-radius: 1px;
    background: repeating-linear-gradient(
      0deg,
      Silver 0px,
      Silver 7px,
      Black 7px,
      Black 10px
    );
  }

  // BOTTOM
  &:after {
    border-top: 0;
    bottom: -4px;
    right: -1px;
    width: 100%;
    height: 0em;
    border-radius: 1px;
    transform: skewX(-45deg);
    background: repeating-linear-gradient(
      90deg,
      Grey 0px,
      Grey 7px,
      Black 7px,
      Black 10px
    );
  }

  &:hover {
    -webkit-box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.75);

    transform: translate(4px, -4px);

    // SIDE
    &:before {
      left: -8px;
      top: 1px;
      width: 4px;
    }

    // BOTTOM
    &:after {
      bottom: -8px;
      right: 1px;
      height: 4px;
    }
  }
`

export { Container, Text, Card, PopUp, Btn }
