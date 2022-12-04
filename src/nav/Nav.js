import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Nav = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <>
        <header>
            
               
                    <img src={logo} alt="tfm logo" />
                

                
                <nav ref={navRef} >
                    
                        <a href="/#">
                            <Link to="/" className="col">

                                Home
                            </Link>
                        </a>
                        <a href="/#">

                            <Link to="/about" className="col">

                                About Us
                            </Link>
                        </a>
                        <a href="/#">

                            <Link to="/who" className="col">
                                Who We Are
                            </Link>
                        </a>
                        <a href="/#">

                            <Link to="/service" className="col">

                                Services We Offer
                            </Link>
                        </a>
                        <a href="/#">
                            <Link to="/contact" className="col">

                                Contact
                            </Link>
                        </a>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            
        </header>
        </>
    );
};

export default Nav;

// dont forget to include courses then clarify what will be in cart
// { <Link to= "/courses" classname= 'courses'><a href ="https://www.w3schools.com/css/css_image_transparency.asp"  rel="noreferrer"  target = "_blank" /> Courses </Link> }
