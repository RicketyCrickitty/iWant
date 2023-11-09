import React from "react";
import './components.css';

//TODO: Add ability to push new list items to database and refresh

const Wishlist = ({ wishlistName, wishlist }) => {
    return (
        <li>
            <div class="Wishlist">
                <h3>{wishlistName}</h3>
                <ul>
                    {wishlist.map((wishlistItem) =>
                        <li class="WishlistItem">{wishlistItem}</li>
                    )}
                </ul>
                <button class="newItem">Add to Wantlist</button>
            </div>
        </li>
    );
};

export default Wishlist;