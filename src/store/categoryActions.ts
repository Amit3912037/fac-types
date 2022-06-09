import {
    FetchCategoriesRequest,
    FetchCategoriesFailure,
    FetchCategoriesSuccess,
    FetchCategoriesFailurePayload,
    FetchCategoriesSuccessPayload,
  } from "../models/categoryTypes";
  
  import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_REQUEST,
  } from "./actionTypes";
  
  export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
    type: FETCH_CATEGORIES_REQUEST,
  });
  
  export const fetchCategoriesSuccess = (
    payload: FetchCategoriesSuccessPayload
  ): FetchCategoriesSuccess => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload,
  });
  
  export const fetchCategoriesFailure = (
    payload: FetchCategoriesFailurePayload
  ): FetchCategoriesFailure => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload,
  });
  
  
  