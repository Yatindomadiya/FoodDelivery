import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({})
    const [active, setactive] = useState(false)

    const addtoCart = (itemID) => {
        if (!cartItems[itemID]) {
            setcartItems((prev) => ({ ...prev, [itemID]: 1 }))
            setactive(true)
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
        }
    }
    const removeFromCart = (itemID) => {
        setcartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }

    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }

        }
        return totalAmount;
    }


    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addtoCart,
        removeFromCart,
        getTotalcartAmount,
        active
        
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;