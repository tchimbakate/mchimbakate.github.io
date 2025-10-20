import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/css/index.css";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features"; // You'll need to create this
import Booking from "./components/Booking"; // New Booking component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Features />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/booking" element={<Booking />} /> {/* New route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;