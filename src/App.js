import "./App.css"
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
import Preloader from "./assets/home/preloader.png"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Causes from "./components/Causes/Causes"
import Shop from "./components/Shop/Shop"
import Education from "./components/Home Education/Education"

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [loading])

  function handleLinkClick() {
    setLoading(true)
  }

  return (
    <Router>
      <div className="app-container">
        <div className={`preloader ${loading ? "" : "hidden"}`}>
          <div className="preloader-content">
            <img src={Preloader} alt="Loading..." />
            <div className="loading-line-outer"></div>
            <div className="loading-line-inner"></div>
          </div>
        </div>
        <Header handleLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
