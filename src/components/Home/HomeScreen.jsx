import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const [filterProducts, setFilterProducts] = useState()
  const [categories, setCategories] = useState()

  const products = useSelector(state => state.products)
 
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  const selectCategory = (e)=>{
    const target = e.target.innerText
    const filterByCategory = products.filter(product => product.category.name === target) 
    setFilterProducts(filterByCategory)
  }

  return (
    <div className='home-screen'>
      <InputSearch setFilterProducts={setFilterProducts}/>
    <div className='main-content'>
      <div className='filters'>
        <div className='filters-by-categories'>
          <h4 className='filters-by-categories-name'>Categories</h4>
          <ul>
            {categories &&
            categories.map(category => (
              <li className='list-item-category' key={category.id}><a onClick={selectCategory}>{category.name}</a></li>
            ))
            }
          </ul>
        </div>
      </div>
      <div className='products-container'>
        {
          filterProducts 
          ?
          filterProducts.map(product => (
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
    </div>
  )
}

export default HomeScreen