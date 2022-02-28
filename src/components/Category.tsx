import React from 'react'
import Item from './Item'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';
import Product from '../models/Product';
import { RootState} from '../store'


const Category: React.FC<{name: string;  array: Product[]}>  = (props) =>{

    const isLoading=useSelector((state: RootState)=> state.products.isLoading);
  
  
    return (
        <>
            <div className='m-3'>
                <div className='font-bold text-2xl m-2 text-red-900'>{isLoading?<Skeleton width={200}/>:props.name}</div>
                <div className='flex flex-nowrap w-full md:flex-wrap overflow-x-auto border-2 border-gray-100 bg-sky-100'>
                    {
                        props.array && props.array.map(((item, index) =>
                            <Item
                                key={index}
                                title={item.title}
                                imageUrl={item.imageUrl}
                            />))
                    }
                </div>
            </div>
        </>


    )
}


export default Category;