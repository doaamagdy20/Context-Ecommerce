import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function Nav({ isLoggedIn, onSignInClick, onSignUpClick, onLogout }) {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🛍 My Shop
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cartpage" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>

          {/* Cart + Auth Buttons */}
          <div className="d-flex align-items-center">
            <Link to="/cart" className="btn btn-outline-light me-2">
              🛒 Cart ({cart.length})
            </Link>

            {!isLoggedIn ? (
              <>
                <button className="btn btn-primary me-2" onClick={onSignInClick}>
                  Sign In
                </button>
                <button className="btn btn-primary" onClick={onSignUpClick}>
                  Sign Up
                </button>
              </>
            ) : (
              <button className="btn btn-danger" onClick={onLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
