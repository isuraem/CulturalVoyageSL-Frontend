import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";
import { FaBars ,FaRegUser} from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

export default function NavBar() {

    const [MobileView, setMobileView] = useState(false);

    return (
        <nav className='navbar'>
            <div className='logo'>
            <img src='images/logo.png' alt="Logo" style={{ width: 300, height: 80 }}/>
            </div>
            <ul className={MobileView ? "nav-links-mobile" : "nav-links"} onClick={() => setMobileView(false)}>
                <Link to="#"><li>Home</li></Link>
                <Link to="#"><li>About</li></Link>
                <Link to="#"><li>Contact</li></Link>
                <Link to="#"><li>Services</li></Link>
                <Link to="#"><li><FaRegUser /></li></Link>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobileView(!MobileView)}>
                {MobileView ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}