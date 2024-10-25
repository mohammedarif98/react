import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice for handling product data
export const productApi = createApi({
  reducerPath: 'products',  // Defines the reducer path
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }), // API base URL
  endpoints: (builder) => ({

    // Define an endpoint for fetching all products
    getAllProducts: builder.query({
      query: () => '/products', // Endpoint to fetch all products
    }),

    // Define a mutation for adding a new product
    addNewProduct: builder.mutation({
      query: (productDetails) => ({
        url: '/products/add',       // API endpoint for adding a product
        method: 'POST',             // HTTP method
        headers: { 'Content-Type': 'application/json' },  // Fixed `headers` spelling
        body: productDetails        // Payload of the POST request
      })
    }),

    /// Define a mutation for updating an existing product
    updateProduct : builder.mutation({
        query: ({id,updateProductDetails}) => ({
            url : `/products/${id}`,
            method : 'PUT',
            headers: { 'Content-Type': 'application/json' },  // Fixed `headers` spelling
            body: updateProductDetails    
        })
    }),

    // Define a mutation for deleting an existing product
    deleteProduct : builder.mutation({
        query: (id) => ({
            url : `/products/${id}`,
            method : 'DELETE',
        })
    }),

  }),
});

// Export the hooks to fetch all products and add a new product
export const { useGetAllProductsQuery, useAddNewProductMutation,useUpdateProductMutation,useDeleteProductMutation } = productApi;
