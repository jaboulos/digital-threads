import React from 'react';

import { ButtonContainer } from './styledComponents';

// import './Button.scss';

const Button = ({ children, ...props }) => (
  <ButtonContainer className='custom-button' {...props}>
    {children}
  </ButtonContainer>
);

export default Button;
