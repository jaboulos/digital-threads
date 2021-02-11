export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  ); // returns first item found

  if (existingCartItem) {
    // create new array with map
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // update the quantity property
        : cartItem
    );
  }

  // quantity property gets attached the first time around since this if block wont run when its a new item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
