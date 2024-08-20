import React, { useContext } from 'react';
import { assets, food_list } from '../../assets/assets';
import './fooditem.css'
import { StoreContext } from '../../context/storeContext';
const FoodItem = ({ id, name, price, description, image }) => {


  const { addtoCart, removeFromCart, cartItems } = useContext(StoreContext)
  return (
    <div className='food_item'>
      <div className="food_item_img_container">
        <img className='food_item_img' src={image} alt="" />
        {!cartItems[id]
          ? <img className='add' src={assets.add_icon_white} onClick={() => addtoCart(id)}></img> :
          <div className='food_item_counter'>
            <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addtoCart(id)} />
          </div>
        }
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts}></img>


        </div>
        <p className='food_discription'>{description}</p>
        <p className="food_price">₹ {price}</p>
      </div>

    </div>
  );
}

export default FoodItem;
