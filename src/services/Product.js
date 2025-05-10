export const getProduct=()=>{
    return fetch(`${ProductApi}`)
}
export const fetcher=(...args)=>fetch(...args).then(res=> res.json())
export const ProductApi=`${import.meta.env.VITE_BASE_URL}/products`
export const storeProduct=(data)=>{
    return fetch(`${ProductApi}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
}
export const destoryProduct=(id)=>{
return fetch(`${ProductApi}/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }
})
}