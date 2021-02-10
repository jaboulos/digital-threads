import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import CartItem from '../Cartitem/CartItem';

import './cartDropdown.scss';

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default connect(mapStateToProps)(CartDropdown);
