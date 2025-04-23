import React, {useContext } from 'react'
import { shopContext } from '../context/ShopContext'
import { Link } from 'react-router'

const ProductList = ({id , name , image , price}) => {
    const {currency}  = useContext(shopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden rounded'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm poppins-regular'>{name}</p>
        <p className='text-sm poppins-bold text-red-500'>{currency}{price}</p>
    </Link>

  )
}

export default ProductList
