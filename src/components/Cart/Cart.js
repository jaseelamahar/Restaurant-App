import React,{useContext} from 'react'
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from '../../store/cart-context';




const Cart = (props) => {
  const Cartctx = useContext(CartContext);

    const cartitems=(
      <ul className={classes['cart-items']}>
      {Cartctx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
  return (
   
    
         <Modal  onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Cartctx.totalAmount.toFixed(2)}</span>

      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>

      </div>
      </Modal>
    
  )
}

export default Cart

