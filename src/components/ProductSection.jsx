import React, { useEffect, useState } from 'react'
import ProductLists from './ProductLists'
import ProductCreateForm from './ProductCreateForm'
import { getProduct } from '../services/Product';
import { Toaster } from 'react-hot-toast';
import { tailspin } from 'ldrs'
tailspin.register()
const ProductSection = () => {
    const[product,setProducts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res= await getProduct();
                const data=await res.json(data=>data)
                setProducts(data)
            }
         catch{
            console.log("error...");
         }
        }
        fetchData()
    },[])
  return (
    <section className=' flex justify-center h-screen items-center  '>
        <div className=''>
        <div className='w-full  mx-auto    '>
            <h1 className="text-3xl text-slate-300 text-center">Product Lists</h1>
                <ProductLists products={product} setProducts={setProducts}/>
            </div>
            <ProductCreateForm setProducts={setProducts} products={product}/>
        </div>
       <Toaster/>
    </section>
  )
}

export default ProductSection