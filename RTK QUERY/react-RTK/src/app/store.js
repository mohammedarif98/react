import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './service/productData'; // Import the productApi



// Configure the Redux store and add the productApi reducer
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, // Add API reducer to the store
  },
  // Enable the API middleware to handle caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
