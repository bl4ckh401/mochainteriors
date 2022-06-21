import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Unprotected() {
    return (
        <div className='Unprotected'>
            <Home />
            <About />
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
            </div>
            <Services />
            <div className='parallax' id='parallax3_image'>
                <div className='overlay'></div>
            </div>
            <Portfolio />
            <Blog />
            <Shop />
            <div className='parallax' id='parallax4_image'>
                <div className='overlay'></div>
            </div>
            <Contact />
        </div>
    )
}

export default Unprotected