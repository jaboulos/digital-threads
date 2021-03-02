import React from 'react';

import { ButtonContainer } from './styledComponents';

const Button = ({ children, ...props }) => (
  <ButtonContainer className='custom-button' {...props}>
    {children}
  </ButtonContainer>
);

export default Button;
