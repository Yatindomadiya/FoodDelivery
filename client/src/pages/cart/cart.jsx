import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { food_list, cartItems, removeFromCart, getTotalcartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart_items">
                <div className="cart_item_title">
                    <p>Itmes</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />

                {food_list.map((items, index) => {
                    if (cartItems[items._id] > 0) {
                        return (
                            <div>
                                <div className="cart_item_title cart_items_item">
                                    <img src={items.image}></img>
                                    <p>{items.name}</p>
                                    <p>₹{items.price}</p>
                                    <p>{cartItems[items._id]}</p>
                                    <p>₹{items.price * cartItems[items._id]}</p>
                                    <p className='cross' onClick={() => removeFromCart(items._id)}>X</p>
                                </div>
                                <hr></hr>
                            </div>

                        )
                    }
                })}
            </div>
            <div className="cart_bottom">
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
                            <p>₹{getTotalcartAmount() === 0 ? 0 : 20}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <b>Total</b>
                            <b>{getTotalcartAmount() === 0 ? 0 : getTotalcartAmount() + 20}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart_promocode">
                    <div>
                        <p>If you have proma code, Enter it here</p>
                        <div className="cart_promocode_input">
                            <input type="text" placeholder='Promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
