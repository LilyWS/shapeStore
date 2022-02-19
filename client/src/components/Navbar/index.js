import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/profile">
                Account
            </Link>
            <Link to="/cart">
                Cart
            </Link>
        </nav>
    );
}

export default Navbar