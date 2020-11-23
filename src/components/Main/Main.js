import React from 'react'

import './Main.css'
import'../../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className="container"> 
            <h1>Flavours 101</h1>
            <p>Get your Favorite Food Delivered <br></br> Hot & Fresh.</p>
            <div className="btn hero btns ">
                    <a href="/menu"class="button btn-white btn-animated">Order Now</a>
             </div>
             </div>
            
        </div>
    )
}

export default HeroSection
