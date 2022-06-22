import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "1",
      name: "Headphone",
      normal_price: "Rp. 150.000",
      promo_price: "Rp. 100.000",
      rating: "4.5",
      reviewr_count: "12",
      product_image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
    },
  ],
  loading: false,
  error: "",
};

const promo_productsSlice = createSlice({
  name: "promo_products",
  initialState,
  reducers: {
    setPromo_productsState: (state, action) => {
      if ("data" in action.payload) {
        state.data = action.payload.data;
      }
      if ("loading" in action.payload) {
        state.loading = action.payload.loading;
      }
      if ("error" in action.payload) {
        state.error = action.payload.error;
      }
    },
  },
});

export const promo_productsActions = promo_productsSlice.actions;
export const promo_productsReducer = promo_productsSlice.reducer;
