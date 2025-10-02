import React, { useState, useEffect } from "react";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Products from './Products/Products'
import ProductDetails from "./ProudectDetails/ProductDetails";
import CartPage from "./CartPage/CartPage";
import SignIn from "./SignIn/SignIn";
import SignUp from "./Signup/Signup";





function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("auth", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
  };


  return (
    <>
      <Nav  
       isLoggedIn={isLoggedIn}
        onSignInClick={() => setShowSignIn(true)}
        onSignUpClick={() => setShowSignUp(true)}
        onLogout={handleLogout}
      />
    <Routes>
     <Route path="/" element={<Home/>}/>
       <Route path="/Products" element={<Products/>}/>
       <Route path="/products/:id" element={<ProductDetails />} />
       <Route path="/cartpage" element={<CartPage/>}/>
         
    </Routes>
  
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} onLogin={handleLogin} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} onSignUp={handleLogin} />}
    </>
  )
}

export default App
