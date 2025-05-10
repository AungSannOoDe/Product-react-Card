import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const ProductLoader = ({count}) => {
  return Array(count).fill(0).map((_,i)=>(
    <SkeletonTheme baseColor="#cacaca" highlightColor="#8a8a8a">
    <div key={i} className='mb-5 grid grid-cols-[1fr_120px_auto] '>
      <div className="">
      <Skeleton width={250}  />
      </div>
      <div className="">
      <Skeleton width={90} />
      </div>
      <div className="">
      <Skeleton  width={40}  />
      </div>
    </div>
    </SkeletonTheme>
  ))
}

export default ProductLoader