import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './styledComponent';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...rest }) => {
  // isLoading value is determined in Shop component
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...rest} />
  );
};

export default WithSpinner;
