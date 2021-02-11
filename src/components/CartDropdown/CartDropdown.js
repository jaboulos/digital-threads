import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../selectors/cartSelectors';

import Button from '../Button/Button';
import CartItem from '../Cartitem/CartItem';

import './cartDropdown.scss';

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
  </div>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));
