import React from 'react'
import {Trash} from "lucide-react"
import { destoryProduct } from '../services/Product'
import toast from 'react-hot-toast'

const RemoveButton = ({id,setProducts,products}) => {
    const deleting=(products,value)=>{
        toast.success("Items deleted successfully")
        setProducts(products.filter(product=>product.id !=value)) 
    }
const Ondelete= async(value)=>{
    const res=await destoryProduct(value)
    res.ok ? deleting(products,value) : toast.error("Some Error occur...")
}
  return (
    <button className='border border-stone-300  p-1 rounded-lg hover:bg-stone-300 group hover:text-black  active:scale-95' onClick={()=>Ondelete(id)}>
        <Trash  className='group-hover:text-black'  />
    </button>

  )
}

export default RemoveButton