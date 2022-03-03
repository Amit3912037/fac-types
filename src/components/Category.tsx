import React, { useEffect } from "react";
import Item from "./Item";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import * as productsActions from "../store/actions";
import AppState from "../models/AppState";
import ProductsSkelton from "./ProductsSkelton";

const Category: React.FC<{ name: string; }> = (
  props
) => {
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
          {name}
        </div>
        {isLoading ? (
         <ProductsSkelton/>
        ) : (
          <div className="flex flex-nowrap w-full md:flex-wrap overflow-x-auto border-2 border-gray-100 bg-sky-100">
            {products.map((product, index) => (
              <Item
                key={index}
                title={product.title}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
