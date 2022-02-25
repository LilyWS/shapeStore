import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/signup">
                Account
            </Link>
            <Link to="/cart">
                Cart
            </Link>
        </nav>
    );
}

export default Navbar