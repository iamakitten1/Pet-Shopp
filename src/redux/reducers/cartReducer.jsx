// client-frontend/src/redux/reducers/cartReducer.js
const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        const updatedCart = [...state.items, action.payload];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { ...state, items: updatedCart };
      case "REMOVE_FROM_CART":
        const filteredCart = state.items.filter(item => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(filteredCart));
        return { ...state, items: filteredCart };
      default:
        return state;
    }
  }
  