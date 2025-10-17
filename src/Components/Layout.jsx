// src/Components/Layout.jsx
import React from "react";
import NavBar from "./navBar.jsx";

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* NavBar always on top */}
      <NavBar />

      {/* Page Content */}
      <main style={{ paddingTop: "80px" }}>{children}</main>
    </div>
  );
}
