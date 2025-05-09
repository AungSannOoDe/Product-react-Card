import React from 'react'
import RemoveButton from './RemoveButton'

const ProductLists = ({products,setProducts}) => {
  return (
   <div className='px-4 py-2  relative ' >
     <div class="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-stone-900 to-transparent z-10 pointer-events-none"></div>
     <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-stone-900 to-transparent z-10 pointer-events-none"></div>
    <div className='overflow-y-scroll h-[500px] scroll-bar-hide [&::-webkit-scrollbar]:hidden scroll-smooth  '>
    {products.map((product)=><div className='text-slate-300 grid grid-cols-[1fr_150px_auto] items-center mb-4' key={product.id} >
    <p>{product.name}</p> <div className='  w-40 flex justify-center'>
    <p>${product.price}</p>
      </div>  <RemoveButton id={product.id} setProducts={setProducts} products={products} />  </div>)}
    </div>
   </div>
  )
}

export default ProductLists