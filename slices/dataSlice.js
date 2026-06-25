import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getProducts} from '../api/api'

const initialState = {
    products: []
}

export const fetchProducts = createAsyncThunk(
    'data/fetchProducts',
    async (_, {dispatch}) => {
        const productsRes = await getProducts()
        dispatch(setProducts(productsRes))
        }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setFavorite: (state, action) => {
            const productFindId = state.products.findIndex(product => (
                product.id === action.payload.productId
            ))

            if(productFindId >= 0){
                const isFavorite = state.products[productFindId].favorite

                state.products[productFindId].favorite = !isFavorite
            }
        }
    }
})

export const {setFavorite, setProducts} = dataSlice.actions
export default dataSlice.reducer