import { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import SearchBar from "./SearchBar"
import MobileMenu from "./MobileMenu"
import Logo from "./../../assets/header/logo.svg"

export default function Header({ handleLinkClick }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleSearchToggle = () => {
        setIsSearchOpen((isOpen) => !isOpen)
    }

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((isMenuOpen) => !isMenuOpen)
    }

    return (
        <header>
            <div className="site-header">
                <div className="mobile-menu">
                    <button
                        className={isMobileMenuOpen ? 'mobile-menu-button open' : 'mobile-menu-button'}
                        onClick={handleMobileMenuToggle}
                    >
                        {isMobileMenuOpen ? (
                            <MdClose size={30} color='white'/>
                        ) : (
                            <IoMdMenu color="white" size={30}/>
                        )}
                    </button>
                    <MobileMenu 
                        isMobileMenuOpen={isMobileMenuOpen} 
                        handleMobileMenuToggle={handleMobileMenuToggle} 
                    />
                </div>
                <div className="logo">
                        <img src={Logo} alt="Logo"/>
                </div>
                <div className="navbar">
                    <div className="navbar-home">
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                        <div className="sub-menu-home">
                            <div className="sub-menu">
                                <Link to="/">Home Charity</Link>
                                <Link to="/">Home Education</Link>
                                <Link to="/">Home Wildlife</Link>
                                <Link to="/">Ocean Pollution</Link>
                                <Link to="/">World Pandemic</Link>
                                <Link to="/">Home Nature</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-about">
                        <Link to="/about" onClick={handleLinkClick}>About</Link>
                    </div>
                    <div className="navbar-causes">
                        <Link to="/causes" onClick={handleLinkClick}>Causes</Link>
                        <div className="sub-menu-causes">
                            <div className="sub-menu">
                                <Link to="/causes">Causes</Link>
                                <Link to="/">Causes Single</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-shop">
                        <Link to="/" onClick={handleLinkClick}>Shop</Link>
                        <div className="sub-menu-shop">
                            <div className="sub-menu">
                                <Link to="/">Shop Page</Link>
                                <Link to="/">Shop Single</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-pages">
                        <Link to="/" onClick={handleLinkClick}>Pages</Link>
                        <div className="sub-menu-pages">
                            <div className="sub-menu">
                                <Link to="/">About</Link>
                                <Link to="/">Services</Link>
                                <Link to="/">Causes</Link>
                                <Link to="/">Causes Single</Link>
                                <Link to="/">Projects</Link>
                                <Link to="/">Project Single</Link>
                                <Link to="/">Events</Link>
                                <Link to="/">Event Single</Link>
                                <Link to="/">Volunteer</Link>
                                <Link to="/">Volunteer Single</Link>
                                <Link to="/">Testimonial</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-blog">
                        <Link to="/" onClick={handleLinkClick}>Blog</Link>
                        <div className="sub-menu-blog">
                            <div className="sub-menu">
                                <Link to="/">Blog Default</Link>
                                <Link to="/">Blog Left Sidebar</Link>
                                <Link to="/">Blog Full Width</Link>
                                <div className="blog-details">
                                    <Link to="/">Blog Details <span><IoIosArrowForward/></span> </Link>
                                    <div className="sub-menu-blog-details">
                                        <Link to="/">Blog Default</Link>
                                        <Link to="/">Blog Left Sidebar</Link>
                                        <Link to="/">Blog Full Width</Link>
                                    </div>  
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="navbar-contact">
                        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                    </div>
                </div>
                <div className="header-buttons">
                    <button className="header-button-donate">Donate Now</button>
                    <button
                        className="header-button-search"
                        onClick={handleSearchToggle}
                    >
                        {isSearchOpen ? (
                            <IoClose size={22} />
                        ) : (
                            <BiSearch size={22} />
                        )}
                    </button>
                </div>
            </div>
            <div className="search-bar-container">
                <SearchBar 
                    isSearchOpen={isSearchOpen} 
                    handleSearchToggle={handleSearchToggle} 
                />
            </div>
        </header>
    )
}