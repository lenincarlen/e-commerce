import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from '../Home/InputSearch'
import ProductCard from '../Home/ProductCard'
import './style/allProducts.css'

const AllProducts = () => {
    const [filterProductsMain, setFilterProductsMain] = useState()

    const products = useSelector(state => state.products)

  return (
      <div className='all-products'>
        <h2 className='all-products-title'>All Products</h2>
        <InputSearch setFilterProducts={setFilterProductsMain}/>
      <div className='products-container'>
        {
          filterProductsMain 
          ?
          filterProductsMain.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          )) 
          :
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
     
    </div>
  )
}

export default AllProducts