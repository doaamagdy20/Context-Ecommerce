import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* الهيرو */}
      <section className="bg-light d-flex align-items-center flex-grow-1">
        <div className="container">
          <div className="row align-items-center">
            {/* النصوص */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-3 fw-bold mb-3 text-primary">
                Present your products <br /> to millions 
              </h1>
              <p className="lead mb-4 text-muted">
                Start your journey today and grow your online business with ease.
                Build your brand and reach more customers effortlessly.
              </p>
              <Link to="/Products"><button className="btn btn-primary btn-lg rounded-pill px-4 shadow">
                Open a shop now
              </button>
              </Link>
            </div>

            {/* الصورة */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
           src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" 
                alt="E-commerce Illustration"
                className="img-fluid animate__animated animate__fadeInRight"
                style={{ maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-dark text-light text-center py-3">
        © {new Date().getFullYear()} My Shop. All Rights Reserved.
      </footer>
    </div>
  );
}
