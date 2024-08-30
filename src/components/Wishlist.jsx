// import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/actions/wishlistActions"; // Assume this action is defined in your Redux actions

export function Wishlist() {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist); // Assuming you have a wishlist reducer in your Redux store

    const handleRemove = (animal) => {
        dispatch(removeFromWishlist(animal.id)); // Dispatch action to remove animal from wishlist
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-3">My Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <ul>
                    {wishlist.map((animal) => (
                        <li key={animal.id}>
                            {animal.name}
                            <button onClick={() => handleRemove(animal)} className="btn btn-danger btn-sm ms-2">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
