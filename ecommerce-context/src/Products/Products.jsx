import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 لازم تستورد Link

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-center">Our Products</h2>

      {/* Search Input */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="text-muted small flex-grow-1">
                    {product.description.substring(0, 60)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">${product.price}</span>
                    
                    {/* 👇 الصح كده */}
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-sm btn-primary rounded-pill"
                    >
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found</p>
        )}
      </div>
    </div>
  );
}
