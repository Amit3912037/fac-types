import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';
import { RootState} from '../store'

import './Item.css';

const Item: React.FC<{title: string; imageUrl: string}>  =(props)=> {
  const isLoading=useSelector((state: RootState)=> state.products.isLoading);

  let title=props.title;
  if(title.length>70)
  {
    title=title.slice(0,70)+" ...";
  }

  return (
    <div className='min-w-max bg-white mx-3 my-4 text-center transition ease-in-out duration-500 hover:scale-105 item'>
      {isLoading? <Skeleton height={200} width={200} /> :<img className="w-full h-52 my-2" src={props.imageUrl} alt="alt-img" />}
      <p className="w-48 m-auto my-2">{isLoading?<Skeleton count={2}/> : title}</p>
      {isLoading?<Skeleton width={100}/> :<button className='bg-yellow-500 px-3 py-1 mb-2'>Add to Cart</button>}
    </div>


  )
}


export default Item;