
import ProductLists from './ProductLists'
import ProductCreateForm from './ProductCreateForm'
import { fetcher,  ProductApi } from '../services/Product';
import { Toaster } from 'react-hot-toast';
import { tailspin } from 'ldrs';
import useSWR from "swr";
import ProductLoader from './ProductLoader';
tailspin.register()
const ProductSection = () => {
    const{data:products,isLoading}=useSWR(ProductApi,fetcher)

    // const[product,setProducts]=useState([]);
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //             const res= await getProduct();
    //             const data=await res.json(data=>data)
    //             setProducts(data)
    //         }
    //      catch{
    //         console.log("error...");
    //      }
    //     }
    //     fetchData()
    // },[])
  return (
    <section className=' flex justify-center h-screen items-center  '>
        <div className=''>
        <div className='w-full  mx-auto    '>
            <h1 className="text-3xl text-slate-300 text-center">Product Lists</h1>
                   {isLoading ? <ProductLoader count={10}/>:<ProductLists products={products} />}  
            </div>
            <ProductCreateForm  />
        </div>
       <Toaster/>
    </section>
  )
}

export default ProductSection