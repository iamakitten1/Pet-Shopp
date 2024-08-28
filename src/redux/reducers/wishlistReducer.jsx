import { REMOVE_FROM_WISHLIST } from "../actions/wishlistActions";

const initialState = [];

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FROM_WISHLIST:
            return state.filter(animal => animal.id !== action.payload);
        default:
            return state;
    }
};

export default wishlistReducer;
