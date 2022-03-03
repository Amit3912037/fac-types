import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { AppDispatch, RootState } from "../store";
import * as categoryActions from "../store/categoryActions";
import ProductsSkelton from "./ProductsSkelton";
import Skeleton from "react-loading-skeleton";

const Body: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const categoriesLoading = useSelector(
    (state: RootState) => state.categories.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(categoryActions.fetchCategoriesRequest());
  }, [dispatch]);

  return (
    <>
      {categoriesLoading ? (
        <>
          <div className="m-3">
            <div className="font-bold text-2xl m-2 text-red-900">
              <Skeleton width={200} />
            </div>
            <ProductsSkelton />
          </div>
          <div className="m-3">
            <div className="font-bold text-2xl m-2 text-red-900">
              <Skeleton width={200} />
            </div>
            <ProductsSkelton />
            <div />
          </div>
        </>
      ) : (
        categories.map((category: string) => (
          <Category key={category} name={category} />
        ))
      )}
    </>
  );
};

export default Body;
