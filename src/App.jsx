import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Home/Hero.jsx";
import Footer from "./Component/Footer/Footer";
import Teachings from "./Pages/Courses/Teachings.jsx";
import Writing from "./Pages/Writing/Writing.jsx";
import Subscription from "./Pages/Subscription/Subscription.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Teachings" element={<Teachings />} />
        <Route path="/Writing" element={<Writing />} />
        <Route path="/Subscription" element={<Subscription />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;