import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import Button from '../Button/Button';
import CartItem from '../Cartitem/CartItem';

import './cartDropdown.scss';

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// dispatch is passed as a prop to component if not passed in to connect
const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
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
    <Button
      // question about onClick call here and call on cartIcon
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
