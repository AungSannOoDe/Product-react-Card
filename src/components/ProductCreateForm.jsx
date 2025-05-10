import React from 'react'
import { useForm } from 'react-hook-form'
import 'animate.css';
import { ProductApi, storeProduct } from '../services/Product';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';
const ProductCreateForm = () => {
  const{mutate}=useSWRConfig()
    const Process=(data)=>{
        toast.success(`${data.name} is added successfully`) 
        // setProducts([...products,data])
        reset()
        mutate(ProductApi)
    }
        const NotNumbers=(value)=>{
        if(/\d/.test(value)){
            return "Numbers are not allowed"
        }
         return true
    }
    const {handleSubmit,register,reset,formState:{errors,isSubmitting}}=useForm()
   const Saving= async (value)=>{
    try{
        const res= await storeProduct(value)
        const data=await res.json()
        res.ok ? Process(data) :toast.error("Some thing wrong...")
        reset()
          
    }
   catch{
    console.log("Store Product is error...");
   }
   }
  return (
    <section className='' >
         <form action="" onSubmit={handleSubmit(Saving)}>
            <section className='flex gap-5'>
            <div>
                   <input type="text" {...register("name",{
                    required:"Name is required",
                    validate:NotNumbers,
                     minLength:{
                        value:4,
                        message:"name length must be 4"
                     }
                   })} placeholder='Enter product name....' className='border-2 border-slate-300 placeholder:text-slate-300 px-1 py-2 outline-0 text-slate-300' />
                   <span className={` ${errors.name && 'animate__animated animate__headShake'}  text-red-500 text-xs block`}>{errors.name && errors.name.message}</span>
                        </div>
                        <div>
                           <input type="number" {...register("price",{
                            required:"Price is required",minLength:{
                              value:3,
                              message:"Price must be 3 longs"
                            }
                           })} placeholder='Enter product price....' className='border-2 border-slate-300 placeholder:text-slate-300 px-1 py-2 outline-0 text-slate-300' />
                           <span className={` ${errors.price && 'animate__animated animate__headShake'}   text-red-500 text-xs block`}>{errors.price && errors.price.message}</span>
                                </div>
                                <div className=''>
                                    <button className='bg-slate-300 px-3 py-3 rounded-lg hover:text-slate-300 hover:border border-slate-300 transition-all duration-500 hover:bg-stone-900 '>
                                    {isSubmitting ?  <l-tailspin
                                              size="15"
                                              stroke="1"
                                              speed="0.9" 
                                              color="black" 
                                           ></l-tailspin> :"Add" }
                                    </button>
                                </div>
            </section>
         </form>
    </section>
  )
}

export default ProductCreateForm