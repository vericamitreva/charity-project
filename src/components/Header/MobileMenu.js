import React from 'react'
import "./../Header/mobileMenu.css"
import { MdClose } from "react-icons/md";


export default function MobileMenu({isMobileMenuOpen, handleMobileMenuToggle}) {
    return (
        <div>
        {isMobileMenuOpen ? (
            <div className="mobile-navbar-container">
            <div className='mobile-navbar-button-container'>
                <button 
                    className='mobile-navbar-button'
                    onClick={handleMobileMenuToggle}
                >
                    <MdClose size={30} color='white'/>
                </button>
            </div>
            <div className='mobile-navbar'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/causes">Causes</a>
                <a href="/shop">Shop</a>
                <a href="/pages">Pages</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
        ) : ("")}
        </div>
    )
}
