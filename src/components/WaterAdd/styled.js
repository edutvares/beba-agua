import styled from "styled-components";

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
  font-size: 5em;
`;

export const Button = styled.button`
  text-decoration: none;
  background: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
`;

export const Form = styled.form`
  position: absolute;
  left: 50%;
  bottom: 10vh;
  transform: translateX(-50%);
  text-align: center;
  width: 80%;

  button,
  input {
    display: block;
    margin: 0 auto;
  }
`;

export const Range = styled.input`
  width: 100%;

  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border: 5px solid #fff;
    background: #0067c7;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #0067c7;
    cursor: pointer;
  }
`;
