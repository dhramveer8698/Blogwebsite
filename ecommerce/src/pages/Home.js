import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
     <h1 className='heading'>Welcome to our website</h1> 
     <section>
        <h1>Products</h1>
        <Products/>
     </section>
    </>
  )
}

export default Home;
