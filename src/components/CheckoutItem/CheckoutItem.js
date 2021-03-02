import React from 'react';

import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  decreaseItem,
} from '../../redux/cart/cartActions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './styledComponents';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

const CheckoutItem = ({ cartItem, clearItem, addItem, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        {/* utf-8 < > icons */}
        <div onClick={() => decreaseItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      {/* utf-8 X icon */}
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
