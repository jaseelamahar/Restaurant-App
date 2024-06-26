import React,{useState,Fragment} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";




function App() {
  const [CartIsOpen,setCartIsOpen]=useState(false);

  const showCartHandler=()=>{
    setCartIsOpen(true)
  }
  const hideCartHandler=()=>{
    setCartIsOpen(false)
  }
  return (
    <CartProvider>
     {CartIsOpen && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
