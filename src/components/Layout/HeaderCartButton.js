import React from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
  const Cartctx=useContext(CartContext)
  console.log(CartContext)
  const numberofcartitems=Cartctx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },1)
  console.log(numberofcartitems)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span >Your Cart </span>
        <span className={classes.badge}>  {numberofcartitems}</span>
    </button> 
  )
}

export default HeaderCartButton
