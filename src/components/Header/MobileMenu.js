import React, { useState } from 'react'
import "./../Header/mobileMenu.css"
import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export default function MobileMenu({isMobileMenuOpen, handleMobileMenuToggle}) {
    const[isHomeActive, setIsHomeActive] = useState(false)
    const[isCausesActive, setIsCausesActive] = useState(false)
    const[isShopActive, setIsShopActive] = useState(false)
    const[isPagesActive, setIsPagesActive] = useState(false)
    const[isBlogActive, setIsBlogActive] = useState(false)
    const[isBlogDetailsActive, setIsBlogDetailsActive] = useState(false)

    const handleHomeToggle = () => {
        setIsHomeActive((isHomeActive)=>(!isHomeActive))
    }

    const handleCausesToggle = () => {
        setIsCausesActive((isCausesActive)=>(!isCausesActive))
    }

    const handleShopToggle = () => {
        setIsShopActive((isShopActive)=>(!isShopActive))
    }

    const handlePagesToggle = () => {
        setIsPagesActive((isPagesActive)=>(!isPagesActive))
    }

    const handleBlogToggle = () => {
        setIsBlogActive((isBlogActive)=>(!isBlogActive))
    }

    const handleBlogDetailsToggle = () => {
        setIsBlogDetailsActive((isBlogDetailsActive)=>(!isBlogDetailsActive))
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
                <div className='item'>
                    <button className='item-button' 
                        onClick={handleHomeToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Home</div> 
                            <div>  
                                {isHomeActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isHomeActive ? 'open' : ''}`}>
                        <a href="/">Home Charity</a>
                        <a href="/">Home Education</a>
                        <a href="/">Home Wildlife</a>
                        <a href="/">Home Pollution</a>
                        <a href="/">Home Pandemic</a>
                        <a href="/">Home Nature</a>
                    </div>
                </div>
                <a href="/about" className='a-item'>About</a>
                <div className='item'>
                    <button className='item-button' 
                        onClick={handleCausesToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Causes</div> 
                            <div>  
                                {isCausesActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isCausesActive ? 'open' : ''}`}>
                        <a href="/">Causes</a>
                        <a href="/">Causes Single</a>
                    </div>
                </div>
                <div className='item'>
                    <button className='item-button' 
                        onClick={handleShopToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Shop</div> 
                            <div>  
                                {isShopActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isShopActive ? 'open' : ''}`}>
                        <a href="/">Shop Page</a>
                        <a href="/">Shop Single</a>
                    </div>
                </div>
                <div className='item'>
                    <button className='item-button' 
                        onClick={handlePagesToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Pages</div> 
                            <div>  
                                {isPagesActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isPagesActive ? 'open' : ''}`}>
                        <a href="/">About</a>
                        <a href="/">Services</a>
                        <a href="/">Causes</a>
                        <a href="/">Causes Single</a>
                        <a href="/">Projects</a>
                        <a href="/">Projects Single</a>
                        <a href="/">Events</a>
                        <a href="/">Events Single</a>
                        <a href="/">Volunteer</a>
                        <a href="/">Volunteer Single</a>
                        <a href="/">Testimonial</a>
                    </div>
                </div>
                <div className='item'>
                    <button className='item-button' 
                        onClick={handleBlogToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Blog</div> 
                            <div>  
                                {isBlogActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isBlogActive ? 'open' : ''}`}>
                        <a href="/">Blog Default</a>
                        <a href="/">Blog Left Sidebar</a>
                        <a href="/">Blog Full Width</a>
                        <div className='item'>
                    <button className='item-button' 
                        onClick={handleBlogDetailsToggle}
                    >
                        <div className='mobile-navbar-item'>
                            <div>Blog Details</div> 
                            <div>  
                                {isBlogDetailsActive ? (<IoIosArrowDown/>)
                                :(<IoIosArrowForward/>)} 
                            </div>
                        </div>
                    </button>
                    <div className={`sub-items ${isBlogDetailsActive ? 'open' : ''}`}>
                        <a href="/">Blog Single Default</a>
                        <a href="/">Blog Single Left Sidebar</a>
                        <a href="/">Blog Single Full Width</a>
                    </div>
                </div>
                    </div>
                </div>
                <a href="/contact">Contact</a>
            </div>
        </div>
        ) : ("")}
        </div>
    )
}
