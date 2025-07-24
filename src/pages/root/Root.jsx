import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";
import About from "../about/About";
import Product from "../product/Product";
import Login from "../login/Login";
import Admin from "../admin/Admin";

function Root() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-panel" element={<Admin />}></Route>
          <Route
            path="*"
            element={
              <h1
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
                  fontSize:"70px"
                }}
              >
                Page Not Found...
              </h1>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Root;
