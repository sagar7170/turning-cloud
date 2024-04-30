import React from 'react'
import ProductCard from './ProductCard'

function AllProducts() {
   const products = [1,1,1,1,1];
  return (
    <div className='flex flex-wrap justify-center'>
        {products?.map(()=>{
        return <ProductCard/>
        })}
    </div>
  )
}

export default AllProducts
{/* <ProductCard/> */}