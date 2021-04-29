import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #0067c7;
    z-index: -1;
    transition: all 1000ms ease-in-out;

    height: ${(props) => props.percentage}%;
  }
`;

export const Percentage = styled.h1`
  font-size: 7em;
`;

export const Link = styled(ReactLink)`
  position: absolute;
  left: 50%;
  bottom: 10vh;
  transform: translateX(-50%);
  text-decoration: none;
  background: #fff;
  color: #000;
  padding: 10px 20px;
`;
