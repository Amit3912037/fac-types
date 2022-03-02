
import Product from "./Product";

type AppState={
    Electronics: {
        loading: boolean,
        categoryProducts: Product[]
    },
    Clothes:{
        loading: boolean,
        categoryProducts: Product[]
    },
    Laptops:{
        loading: boolean,
        categoryProducts: Product[]
    }
}

export default AppState;