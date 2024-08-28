export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const removeFromWishlist = (id) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
});
