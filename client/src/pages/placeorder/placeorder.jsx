import React, { useContext } from 'react';
import './placeorder.css'
import { StoreContext } from '../../context/storeContext';

const Placeorder = () => {
  const {getTotalcartAmount}=useContext(StoreContext)
  return (
    <div className='placeorder_container'>
      <div className="placeorder_container_left">
        <p className="place_order_title">Delivery Information</p>
        <div className="multi_field">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi_field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi_field">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeorder_container_right">
      <div className="cart_total">
                    <h2>Cart totals</h2>
                    <div>
                        <div className="cart_total_details">
                            <p>Subtotal</p>
                            <p>{getTotalcartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <p>Delevery Fee</p>
                            <p>₹{20}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <b>Total</b>
                            <b>{getTotalcartAmount()+20}</b>
                        </div>
                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>
      </div>

    </div>
  );
}

export default Placeorder;
