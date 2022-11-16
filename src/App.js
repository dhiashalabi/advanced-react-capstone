import React from "react"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
