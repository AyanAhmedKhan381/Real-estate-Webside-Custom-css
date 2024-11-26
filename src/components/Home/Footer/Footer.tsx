import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-grid'>

        {/* 1st footer part */}
           <div className='footer-logo-section'>
              {/* Logo */}
             <div className='footer-logo'>
                <div className='footer-logo-icon'>
                     <FaHouse/>
                </div>
                <h1 className='footer-title'>HomeHub</h1>
             </div>
               <p className='footer-description'>
                 Your go-to place for all things home: tips, products, and inspiration!
               </p>

               {/* email & phone num */}
               <p className='footer-contact'>ayangood49@gmail.com</p>
               <p className='footer-contact'>+01258087525</p>
                 
                 {/* social media icons */}
                 <div className='footer-social-icons'>
                    <FaFacebook className='footer-icon'/>
                    <FaTwitter className='footer-icon'/>
                    <FaYoutube className='footer-icon'/>
                    <FaInstagram className='footer-icon'/>
                    <FaLinkedin className='footer-icon'/>
                 </div>

           </div>
            
            {/* 2nd Part */}
            <div className='footer-section'>
                 <h1 className='footer-heading'>Popular Search</h1>
                 <p className='footer-link'>Apartment For Rent</p>
                 <p className='footer-link'>Apartment Low to High</p>
                 <p className='footer-link'>Offices For Buy</p>
                 <p className='footer-link'>Offices For Rent</p>
            </div>

            {/* 3rd Part */}
            <div className='footer-section'>
                 <h1 className='footer-heading'>Quick Link</h1>
                 <p className='footer-link'>Terms of Use</p>
                 <p className='footer-link'>Privacy Policy</p>
                 <p className='footer-link'>Pricing Plans</p>
                 <p className='footer-link'>Our Services</p>
                 <p className='footer-link'>Careers</p>
                 <p className='footer-link'>FAQs</p>
            </div>

            {/* 4th Part */}
             <div className='footer-section'>
                 <h1 className='footer-heading'>Discover</h1>
                 <p className='footer-link'>Miami</p>
                 <p className='footer-link'>Los Angeles</p>
                 <p className='footer-link'>Chicago</p>
                 <p className='footer-link'>New York</p>
                 <p className='footer-link'>London</p>
            </div>

        </div>
    </div>
  )
}

export default Footer;
