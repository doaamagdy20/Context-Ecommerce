import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} My Shop. All Rights Reserved.
        </p>
        <div>
          <a href="#" className="text-light me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-light me-3">
            Terms of Service
          </a>
          <a href="#" className="text-light">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
