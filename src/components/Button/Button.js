import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, ...rest }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
