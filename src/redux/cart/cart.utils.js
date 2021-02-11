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

export const decreaseItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    // if quantity is 1, filter out of cart
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  // if the quantity is greater than 1, decrease quantity
  return cartItems.map((cartItem) =>
    // if its the same item, decrease quantity
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : // otherwise keep it the same because it doesnt need to be modified
        cartItem
  );
};
