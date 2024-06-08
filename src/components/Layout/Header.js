import { Fragment } from "react"
import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"
import cartImage from "../../assets/cart.jpg"

import React,{useState} from "react"


const Header=(props)=>{
    const [cartItems, setCartItems] = useState([]);

  // Function to count items in the cart
  const countItemsInCart = () => {
    return  cartItems.length.toString();
  };
    return(
        <Fragment>
            <header className={classes.header}>
            <h1>ReactMeals</h1>
             <button className={classes['button']}> 
                 <img className={classes['cart-image']} src={cartImage} alt="Cart" /> Your Cart  
                 <span className={classes['cart-count']}>{countItemsInCart()}</span></button>
                  </header>
            <div className={classes['main-image']}>
           <img src={mealsImage} alt="A Table full of delicious food!"/>
            </div>
        </Fragment>
    )
}

export default Header