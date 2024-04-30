import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import OrderDetails from './components/OrderDetails';
import ProductCard from './components/ProductCard';
import AllProducts from './components/AllProducts';

function App() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }

  return (
    <div className='flex'>
      <Navigation />
      <div className="w-full">
        <Header />
        <div className="flex">
          <div className="">
            <Searchbar />
            <AllProducts />
          </div>
          <OrderDetails />
        </div>
      </div>
    </div>
  )
}

export default App
