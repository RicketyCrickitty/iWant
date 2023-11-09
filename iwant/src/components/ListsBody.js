import React from "react";
import './components.css';
import Wishlist from "./Wishlist";

//TODO: add database lookup for individal user's lists
// wishlists = getLists for User
const testList =  ["Tesla Model 3", "KitchenAid Stand Mixer", "Carhart Work Overalls", "thing4"]
//const jamesLists = {"testList": ["Tesla Model 3", "KitchenAid Stand Mixer", "Carhart Work Overalls"]}
//const userLists = {"James": jamesLists};

const ListBody = ({ user }) => {
    return (
        // TODO: Iterate over wishlist, may have to convert both to arrays first
        <ul>
            <Wishlist wishlistName="testList" wishlist={testList}></Wishlist>
        </ul>
    );
};

export default ListBody;