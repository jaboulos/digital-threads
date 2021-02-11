import React from 'react';

import './checkout.scss';

const Checkout = () => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='headeer-block'>
        <span>Product</span>
      </div>
      <div className='headeer-block'>
        <span>Description</span>
      </div>
      <div className='headeer-block'>
        <span>Quantity</span>
      </div>
      <div className='headeer-block'>
        <span>Price</span>
      </div>
      <div className='headeer-block'>
        <span>Remove</span>
      </div>
    </div>
  </div>
);

export default Checkout;
