import React from 'react'

const CartContext=React.createContext({
    Items:[],
    totalAmount:0,
    addItem:((item)=>{}),
    removeItem:(id)=>{}
})

export default CartContext
