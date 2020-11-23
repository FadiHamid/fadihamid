import React from 'react';
import './Nav.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from '../Resume/Fadi-Al-Hamid_Resume.pdf'
const Nav = () => {

    return (
        <div className="navbar">
            <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
            > Home</Link>
            <a href={Resume} download target="_blank"> Resume</a>
            <Link
                activeClass="active"
                to="DemoReel"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
            > Demo reel</Link>
            <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-250}
                duration={1500}
            > Projects</Link>
            <Link
                activeClass="active"
                to="Testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
            > Testimonials</Link>
            <Link
                activeClass="active"
                to={"Footer"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
            > Contact</Link>
        </div>
    );
}



export default Nav;