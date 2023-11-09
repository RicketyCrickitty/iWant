import React from "react";
import './components.css';

const Header = ({ user }) => {
    return (
        <div>
            <h1 class="Header">iWant - {user}'s Lists!</h1>
        </div>
    );
};

export default Header;