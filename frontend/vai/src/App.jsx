import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loginpage from "./pages/loginpage";
import Navbar from "./pages/navbar";
import Login from "./components/login";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;