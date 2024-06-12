import React,{useState,Fragment} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";




function App() {
  const [CartIsOpen,setCartIsOpen]=useState(false);
  const showCartHandler=()=>{
    setCartIsOpen(true)
  }
  const hideCartHandler=()=>{
    setCartIsOpen(false)
  }
  return (
    <Fragment>
     {CartIsOpen && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
      </Fragment>
  );
}

export default App;
