import { put, takeEvery, call } from "redux-saga/effects";
import Product from "./models/Product";
import products from "./data/products";
import { fetchProductsFailure, fetchProductsSuccess } from "./store/actions";
import { FETCH_CATEGORIES_REQUEST, FETCH_PRODUCTS_REQUEST } from "./store/actionTypes";
import { ProductActions } from "./models/types";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./store/categoryActions";
import PRODUCTS from "./data/products";

const getCategories = (products: Product[]): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = Array.from(new Set(categories));
    const randomDuration=Math.floor(Math.random()*5000);
    setTimeout(() => {
      resolve(uniqueCategories);
    }, randomDuration);
  });
};

const getProducts = (): Promise<Product[]> => {
  const randomDuration=Math.floor(Math.random()*5000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, randomDuration);
  });
};

function* fetchCategoriesSaga() {
  try {
    const products = PRODUCTS;
    // yield call(getProducts);
    const categories: string[] = yield call(getCategories,products);
    yield put(fetchCategoriesSuccess({ categories: categories }));
  } catch (e) {
    yield put(
      fetchCategoriesFailure({
        error: "some error occured",
      })
    );
  }
}

function* fetchProductsSaga(action: ProductActions) {
  const categoryName = action.payload.categoryName;

  try {
    const products: Product[] = yield call(getProducts);

    const categoryProducts = products.filter(
      (product) => product.category === categoryName
    );

    yield put(
      fetchProductsSuccess({
        products: categoryProducts,
        categoryName: categoryName,
      })
    );
  } catch (e) {
    yield put(
      fetchProductsFailure({
        error: "some error occured",
        categoryName: categoryName,
      })
    );
  }
}

function* mySaga() {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default mySaga;
