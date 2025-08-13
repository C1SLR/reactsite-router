// src/App.jsx
import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; // <--- Correct, Outlet is for the pages

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;