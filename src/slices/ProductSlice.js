import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value:JSON.parse(localStorage.getItem("ProductData"))?JSON.parse(localStorage.getItem("ProductData")):null
  },
  reducers: {
    ProductDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {ProductDetails} = ProductSlice.actions

export default ProductSlice.reducer