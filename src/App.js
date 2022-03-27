import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./components/SecondPage/SecondPage/SecondPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="SecondPage" element={<SecondPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
       </div>
 )
 }

export default App;
