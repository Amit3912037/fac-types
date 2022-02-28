import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import * as productsActions from '../store/actions'
import Product from '../models/Product';
// import PRODUCTS from '../data/products';
import { AppDispatch, RootState} from '../store'


export default function Body() {

    const [productsArray, setProductsArray] = useState<Product[][]>([]);

    const dispatch = useDispatch<AppDispatch>();
     const products = useSelector((state: RootState) => state.products.products);
    const categories= useSelector((state: RootState) => state.products.categories);

    useEffect(() => {
            dispatch(productsActions.fetchProductsRequest());
    }, [dispatch])

    useEffect(() => {

        const tempArray: Product[][] = [];
        categories.forEach(category => {
            const temp=products.filter(product=>product.category===category);
            tempArray.push(temp);
        });

        setProductsArray(tempArray);

    }, [products,categories])



    return (
        <>
            {productsArray.map((item, index) => <Category key={index} name={categories[index]} array={item} />)}
        </>
    )
}
