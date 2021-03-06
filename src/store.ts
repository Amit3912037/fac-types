import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from './store/reducers';
import mySaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
