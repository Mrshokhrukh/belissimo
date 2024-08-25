import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/api";

export const store = configureStore({
  reducer: {
    // Add the RTK Query reducer
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

// Setup types for your store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
