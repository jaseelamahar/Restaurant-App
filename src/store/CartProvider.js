import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems=state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState
}


const CartProvider = (props) => {
  const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)
  
  const addItemToCartHandler=(item)=>{
    dispatchCartAction({type:'ADD',item:item})
  }
  
  const removeItemfromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id})
    
  };

  const Cartcontext = {
    items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler
  };

  return (
    <CartContext.Provider value={Cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;