import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center my-5">Product not found</p>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="fw-bold">${product.price}</h4>
          <button  onClick={() => addToCart(product)} className="btn btn-primary btn-lg rounded-pill mt-3">
            Add to Cart
          </button>
          <br />
          <Link to="/products" className="btn btn-link mt-3">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
