import React, { useContext, useState } from 'react';
import './navbar.css'
import { assets } from '../../assets/assets';
import { Link } from "react-router-dom";
import { StoreContext } from '../../context/storeContext';


const Navbar = ({ setshowlogin }) => {
  const {active}=useContext(StoreContext)
  const [menu, setmenu] = useState("Home")
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-manu">
        <Link to='/' className={menu === 'Home' ? 'active' : ''} onClick={() => setmenu('Home')}>Home</Link>
        <a href='#ExploreMenu' className={menu === 'Menu' ? 'active' : ''} onClick={() => setmenu('Menu')}>Menu</a>
        <a href='#AppDownload' className={menu === 'Mobile-app' ? 'active' : ''} onClick={() => setmenu('Mobile-app')}>Mobile-app</a>
        <a href='#footer' className={menu === 'Contact us' ? 'active' : ''} onClick={() => setmenu('Contact us')}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-serch-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={active?"dot":''} ></div>
        </div>
        <button onClick={() => setshowlogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
