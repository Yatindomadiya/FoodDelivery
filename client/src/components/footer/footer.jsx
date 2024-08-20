import React from 'react';
import './footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo}></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tenetur quidem? Fuga, sapiente voluptatem. Sed optio quod voluptates commodi aliquid vitae dicta sapiente provident quam! Suscipit nam atque consectetur hic?</p>
          <div className="footer_social_icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8980833052</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">Copyright 2024 @ Toamto.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
