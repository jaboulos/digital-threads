import styled, { css } from 'styled-components';

// css of regular background for button
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  // otherwise, check if inverted as a prop is true
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black;
  color: white; */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  /* border: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;

  /* &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  } */

  ${getButtonStyles}
`;