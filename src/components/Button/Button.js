import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
