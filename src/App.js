import "./App.css"
import React, { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Homepage from "./pages/Homepage"
import Preloader from "./assets/home/preloader.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"


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
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
