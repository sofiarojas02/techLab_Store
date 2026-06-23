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
        }
    }
})

export const {setProducts} = dataSlice.actions
export default dataSlice.reducer