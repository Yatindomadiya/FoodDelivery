import React, { useState } from 'react';
import './sidebar.css'
import { assets } from '../../assets/assets';
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const [item, setitem] = useState("Add")
  return (
    <div className='sidebar'>
      <div className="sidebar_options">
        <NavLink to='/add' onClick={() => { setitem('Add') }} className={`item == 'add' ? 'active' : '' ${'sidebar_option'} `}>
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' onClick={() => { setitem('item') }} className={`item == 'item' ? 'active' : ''  ${'sidebar_option'} `}>
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to='/orders' onClick={() => { setitem('order') }} className={`item == 'order' ? 'active' : ''   ${'sidebar_option'} `}>
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
