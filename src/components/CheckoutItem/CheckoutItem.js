import React from 'react';

import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  decreaseItem,
} from '../../redux/cart/cartActions';

import './checkoutItem.scss';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

const CheckoutItem = ({ cartItem, clearItem, addItem, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        {/* utf-8 < > icons */}
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className='price'>${price}</span>
      {/* utf-8 X icon */}
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
