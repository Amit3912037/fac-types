import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { AppDispatch, RootState } from "../store";
import * as categoryActions from "../store/categoryActions";

const Body: React.FC = () => {
    const categories: string[] = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      
    dispatch(categoryActions.fetchCategoriesRequest());
  }, [dispatch]);

  return (
    <>
    {
         categories.map((category: string)=> <Category key={category} name={category}/>)
    }
    </>
  );
};

export default Body;
