import React from 'react'
import Link from 'next/link'
import Comma from '@/utils/Comma'

interface Props {
  product?: any,
  className?: String
}

const Product = ({ product, className, ...props }: Props) => {
  return (
    <div className={`hover:bg-white product-card inline-block transition-[250ms] sm:w-[49%] justify-center overflow-x-hidden p-2 ${className}`}>
      <Link href={`/shop/product/${product._id}`} className='text-black'>
        <div className="">
          <img
            src={product.images[0].thumbnail}
            alt="Product image"
            className='w-full h-60 md:h-64 object-cover object-center'
          />
          <h4 className='mt-2 font-bold text-xl truncate'>{product.title}</h4>
        </div>

        <p className='font-inter font-light text-gray-500 m-0'>Rs. {Comma(product.price)}</p>
        {/* <p className='text-center font-inter text-gray-500 m-0'>Rating: {product.rating}</p> */}
      </Link>
    </div>
  )
}

export default Product