import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/product.model";


export const productsApi = createApi({  // created productsApi by using createApi
    reducerPath: "productsApi",  // reducerPath is productsApi
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
    endpoints: (builder) => ({  // using builder can create enpoints
        products: builder.query<Product[], void>({
            query: () => '', // contacts is end point of the server
            // providesTags: ['Contact']  // updating data 
        }),
        product: builder.query<Product, string>({
            query: (id) => `/contacts/${id}`,  //getting data of id
            // providesTags: ['Contact']  // updating data 
        }),
    })
})

export const { useProductsQuery, useProductQuery } = productsApi;