import React from 'react';

import './formInput.scss';

const FormInput = ({ handleChange, label, ...rest }) => (
  <div className='group'>
    {/* ...rest will be all of the props that we pass in from SignIn component  */}
    <input className='form-input' onChange={handleChange} {...rest} />
    {/* ternary for if a label prop was passed */}
    {/* add shrink class when a user has typed something in */}
    {label ? (
      <label
        className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
