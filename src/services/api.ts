import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bellissimo-avt2.onrender.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `get_all_products/`,
    }),
    getProductById: builder.query({
      query: (id) => `get_one_product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
