import React, { useEffect } from "react";
import Item from "./Item";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import * as productsActions from "../store/actions";
import AppState from "../models/AppState";

const Category: React.FC<{ name: string }> = (props) => {
  const { name } = props;
  const isLoading = useSelector(
    (state: RootState) => state.products[name as keyof AppState].loading
  );
  const products = useSelector(
    (state: RootState) =>
      state.products[name as keyof AppState].categoryProducts
  );

  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(productsActions.fetchProductsRequest({ categoryName: name }));
  }, [dispatch, name]);

  return (
    <>
      <div className="m-3">
        <div className="font-bold text-2xl m-2 text-red-900">
          {isLoading ? <Skeleton width={200} /> : name}
        </div>
        <div className="flex flex-nowrap w-full md:flex-wrap overflow-x-auto border-2 border-gray-100 bg-sky-100">
          {products.map((product, index) => (
            <Item
              key={index}
              title={product.title}
              imageUrl={product.imageUrl}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
