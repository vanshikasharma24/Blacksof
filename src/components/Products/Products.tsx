import React from 'react'
interface Iproduct{
    id?:number
    product:string
}
const Products: React.FC<Iproduct>= ({product }) => {
  return (
    <div className='border-[1px] border-black p-1'>
      {`${product}`}
    </div>
  )
}

export default Products
