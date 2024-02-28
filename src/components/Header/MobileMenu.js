import React, { useState } from 'react'
import "./../Header/mobileMenu.css"
import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export default function MobileMenu({isMobileMenuOpen, handleMobileMenuToggle}) {
    const[isMobileMenuItemActive, setIsMobileMenuItemActive] = useState(false)

    const handleMobileMenuItemToggle = () => {
        setIsMobileMenuItemActive((isActive)=>(!isActive))
    }

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
                <button className='item-button' 
                    on onClick={handleMobileMenuItemToggle}
                >
                    <div className='mobile-navbar-item'>
                        <div>Home</div> 
                        <div>   
                            {isMobileMenuItemActive ? (<IoIosArrowDown/>) : 
                            (<IoIosArrowForward/>)}
                        </div>
                    </div>
                </button>
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
