import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";  
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h3>Your Cart is Empty 🛒</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Your Cart 🛒</h2>
      <div className="row g-4">
        {cart.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-4">
        Total: ${cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
      </h4>
    </div>
  );
}
