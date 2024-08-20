import React from 'react';
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setcategory }) => {
    return (
        <div className='ExploreMenu' id='ExploreMenu'>
            <h1>Explore our Menu</h1>
            <p className="ExploreMenu-text">
                Effortlessly browse, customize, and order your favorite dishes. Discover new flavors, add to your cart, and enjoy a seamless food delivery experience. Taste the best, right at your doorstep.
            </p>
            <div className="Explore-Menu-list">
                {menu_list.map((items, index) => {
                    return (
                        <div onClick={() => { setcategory(prev => prev === items.menu_name ? 'All' : items.menu_name) }} className="Explore-Menu-list-item" key={index}>
                            <img className={category===items.menu_name?'active':""}src={items.menu_image} alt="" />
                            <p>{items.menu_name}</p>
                        </div>
                    )
                })}
            </div>  
            <hr />
        </div>
    );
}

export default ExploreMenu;
 