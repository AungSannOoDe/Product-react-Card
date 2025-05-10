import React from 'react'
import {Trash} from "lucide-react"
import toast from 'react-hot-toast'
import { destoryProduct, ProductApi } from '../services/Product'
import { useSWRConfig } from 'swr'

const RemoveButton = ({id}) => {
  const {mutate}=useSWRConfig()
    const deleting=(productapi)=>{
        toast.success("Items deleted successfully")
        mutate(productapi)
        // setProducts(products.filter(product=>product.id !=value)) 
    }
// const Ondelete= async(value)=>{
//     const res=await destoryProduct(value)
//     res.ok ? deleting(products,value) : toast.error("Some Error occur...")
// }
const Ondelete=async(value)=>{
   const res=await destoryProduct(value)
   res.ok? deleting(ProductApi) : toast.error("Something happen...")

}
  return (
    <button className='border border-stone-300  p-1 rounded-lg hover:bg-stone-300 group hover:text-black  active:scale-95' onClick={()=>Ondelete(id)}>
        <Trash  className='group-hover:text-black'  />
    </button>

  )
}

export default RemoveButton