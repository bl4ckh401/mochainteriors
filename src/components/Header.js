import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { HeaderData } from '../utils/HeaderData';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


function Header() {

    const [click, setClick] = useState(false)
    const [isHovered, setisHovered] = useState(false)


    const handleClick = (event) => {
        event.preventDefault()
        setClick(!click)
    }
    const handleHover = (event) => {
        event.preventDefault()
        setisHovered(true)
    }

    return (
        <div className='main_nav'>
            <div className='mochalogo'>
                <img src='/mocha-logo.png' className='img_logo' alt='mocha logo' />
            </div>
            <hr style={{
                width: "100%",
                height: 1,
                backgroundColor: "black"
            }} className="horizontal" />
            <div className='logo_nav'>
                <div className='logo_nav'>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        {HeaderData.map((item) => {
                            return (
                                <Link to={item.path}>
                                    <li className="option mobile-option">{item.title}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>

            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <AiOutlineClose className="menu-icon" />
                ) : (
                    <GiHamburgerMenu className="menu-icon" />
                )}
            </div>
        </div>
    );
}

export default Header;