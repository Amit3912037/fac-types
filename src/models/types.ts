import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS } from '../store/actionTypes'
import Product from './Product';


export interface FetchProductsSuccessPayload {
    products: Product[];
}

export interface FetchProductsFailurePayload {
    error: string;
}

export interface FetchProductsRequest {
    type: typeof FETCH_PRODUCTS_REQUEST;
}

export type FetchProductsSuccess = {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: FetchProductsSuccessPayload;
};

export type FetchProductsFailure = {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: FetchProductsFailurePayload;
};

export type ProductActions = FetchProductsRequest | FetchProductsSuccess| FetchProductsFailure;