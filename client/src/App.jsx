import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/home';
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import Footer from './components/footer/footer';
import { useState } from 'react';
import Loginpopup from './components/loginPopup/loginpopup';


function app() {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path='/' element={<Home setshowlogin={setshowlogin} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}
export default app; 

