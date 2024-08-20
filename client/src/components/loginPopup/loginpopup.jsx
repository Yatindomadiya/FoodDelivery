import React, { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';

const Loginpopup = ({ setshowlogin }) => {

  const [currState, setCurrStare] = useState("sign up")

  return (
    <div className='loginpopup'>
      <form className="loginpopup_container">
        <div className="loginpopup_title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => { setshowlogin(false) }} alt="" />
        </div>
        <div className="loginpopup_input">
          {currState === "Login" ? <></> : <input type='text' placeholder='Your Name ' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === 'sign up' ? "Create account" : "Login"}</button>
        <div className="loginpopup_condition">
          <input type="checkbox" required />
          <p>By continuing, i agree  to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? <p>create a new account?<span onClick={() => setCurrStare('sign up')}>Click here</span></p> :
          <p>Already have a account? <span onClick={() => setCurrStare('Login')}>login</span></p>}

      </form>
    </div>
  );
}

export default Loginpopup;
