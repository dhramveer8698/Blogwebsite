import React from 'react';
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Signup from './pages/Signup';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
            </Routes>
         </BrowserRouter> 
         </Provider>
    </>
  )
}

export default App
