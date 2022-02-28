import { FetchProductsRequest, FetchProductsFailure, FetchProductsSuccess, FetchProductsFailurePayload, FetchProductsSuccessPayload } from "../models/types";

import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './actionTypes'


export const fetchProductsRequest = (): FetchProductsRequest => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (payload: FetchProductsSuccessPayload): FetchProductsSuccess => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
});

export const fetchProductsFailure = (
    payload: FetchProductsFailurePayload
): FetchProductsFailure => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload,
});