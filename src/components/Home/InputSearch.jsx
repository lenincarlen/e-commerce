import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import './style/inputSearch.css'

const InputSearch = ({ setFilterProducts }) => {

  const products = useSelector(state => state.products)

  const {handleSubmit, register, reset} = useForm()

  

  const submit = data => {
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(data.searchText))
    setFilterProducts(filteredProducts)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input 
      type="text" 
      className='form-home-input' 
      {...register('searchText')}
      placeholder='Search for an item' 
      />
      <button className='form-home-btn'>Search</button>
    </form>
  )
}

export default InputSearch