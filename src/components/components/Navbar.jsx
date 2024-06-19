import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Navbar() {
    return (
        <div className="d-flex flex-column vh-100 p-3 shadow-lg bg-gray-100">
            <h2 className="text-center text-success mb-4">Menu</h2>
            <hr className="border-dark my-4" />

            <nav className="nav flex-column bg-gray">
                <Link to="/products" className="nav-link text-dark fs-4 py-2 ">
                    Products
                </Link>
                <Link to="/create" className="nav-link text-dark fs-4 py-2 ">
                    Create products
                </Link>
            </nav>
            
        </div>
    );
    
}

export default Navbar;
