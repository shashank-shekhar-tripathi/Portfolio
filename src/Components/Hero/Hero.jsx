import React from 'react'
import './Hero.css'
import dp from '../../assets/dp.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={dp} alt="" />
        <h1> <span >This is Shashank Shekhar Tripathi,</span> fullstack developer based in INDIA. </h1>
        <p>I am Frontend developer from Uttar Pradesh,India with 3+ years of experience in multiple projects realted to Web Design, Graphic design & Content writing.</p>
        <div className='hero-action'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><div className='hero-connect'>Connect with me</div></AnchorLink>  
            <div className='hero-resume'>My resume</div>
        </div>


    </div>
  )
}

export default Hero