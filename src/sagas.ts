
import { put, takeEvery,call } from 'redux-saga/effects';
import Product from './models/Product';
import { fetchProductsFailure, fetchProductsSuccess } from './store/actions';
import { FETCH_PRODUCTS_REQUEST } from './store/actionTypes';
import axios,{AxiosResponse} from "axios";

const getProducts = () =>
    axios.get<Product[]>("https://jsonplaceholder.typicode.com/products");

function* fetchProductsSaga() {
    try {
        const response: AxiosResponse<Product[]> = yield call(getProducts);
        yield put(
            fetchProductsSuccess({
                products: response.data,
            })

        );
    } catch (error) {
        yield put(
            fetchProductsFailure({
                error: "some error occured",
            })
        );
    }
}


function* mySaga() {
    yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default mySaga;