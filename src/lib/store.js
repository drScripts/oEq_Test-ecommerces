import { configureStore } from "@reduxjs/toolkit";

import { promo_productsReducer } from "../features/promo_products";
import { newsReducer } from "../features/news";

const store = configureStore({
  reducer: {
    promo_products: promo_productsReducer,
    news: newsReducer,
  },
});

export default store;
