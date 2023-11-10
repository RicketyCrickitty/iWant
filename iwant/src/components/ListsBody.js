import React from "react";
import './components.css';
import Wishlist from "./Wishlist";

//TODO: add database lookup for individal user's lists
// wishlists = getLists for User
const testList =  ["Tesla Model 3", "KitchenAid Stand Mixer", "Carhart Work Overalls", "thing4"]
const testList2 =  ["Tesla Model 4", "KitchenAid Stand Mixer 2", "Carhart Work Overalls 2", "thing5"]
const jamesLists = {"testList": testList, "testList2": testList2}
//const userLists = {"James": jamesLists};

const GenLists= ({ wishLists }) => {
    return (
        <>
            {Object.entries(wishLists).map(([key, value]) => {
                return (
                    <Wishlist wishlistName={key} wishlist={value}></Wishlist>
                );
            })}
        </>
    );
};

const ListBody = ({ user }) => {
    return (
        // TODO: Iterate over wishlist, may have to convert both to arrays first
        <ul>
            <GenLists wishLists={jamesLists}></GenLists>
        </ul>
    );
};

export default ListBody;