import React, { useContext } from 'react';
import './food_display.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../foodItem/fooditem';

const FoodDisplay = ({ category }) => {  //ex salad as category
  const { food_list } = useContext(StoreContext)
  return (
    <div className='food_display'>
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem id={index} name={item.name} description={item.description} image={item.image} price={item.price} key={index} />
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
