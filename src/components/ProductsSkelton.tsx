import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductsSkelton:React.FC=()=> {
  return (
    <div className="flex flex-nowrap w-full md:flex-wrap overflow-x-auto bg-slate-100">
    <div className="my-4 mx-6">
      <Skeleton width={250} height={250} />
    </div>
    <div className="my-4 mx-6">
      <Skeleton width={250} height={250} />
    </div>
    <div className="my-4 mx-6">
      <Skeleton width={250} height={250} />
    </div>
    <div className="my-4 mx-6">
      <Skeleton width={250} height={250} />
    </div>
    <div className="my-4 mx-6">
      <Skeleton width={250} height={250} />
    </div>
  </div>
  )
}

export default ProductsSkelton;