import { FETCH_CATEGORIES_FAILURE,FETCH_CATEGORIES_REQUEST,FETCH_CATEGORIES_SUCCESS } from '../store/actionTypes'

// export interface FetchCategoriesRequestPayload {
//     categoryName: string
// }
export interface FetchCategoriesSuccessPayload {
    categories: string[];
}

export interface FetchCategoriesFailurePayload {
    error: string;
}

export type FetchCategoriesRequest = {
    type: typeof FETCH_CATEGORIES_REQUEST;
}

export type FetchCategoriesSuccess = {
    type: typeof FETCH_CATEGORIES_SUCCESS;
    payload: FetchCategoriesSuccessPayload;
};

export type FetchCategoriesFailure = {
    type: typeof FETCH_CATEGORIES_FAILURE;
    payload: FetchCategoriesFailurePayload;
};

export type CategoryActions = FetchCategoriesRequest | FetchCategoriesSuccess| FetchCategoriesFailure;