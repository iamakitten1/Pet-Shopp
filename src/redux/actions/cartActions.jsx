// client-frontend/src/redux/actions/cartActions.js
export const addToCart = (animal) => ({
    type: "ADD_TO_CART",
    payload: animal,
  });
  
  export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id,
  });
  