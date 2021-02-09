import cartActionTypes from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
  // payload is an optional property, not needed in this case
});
