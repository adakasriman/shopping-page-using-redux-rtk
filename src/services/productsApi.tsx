import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDataObject, ProductArray } from "../models/product.model";


export const productsApi = createApi({  // created productsApi by using createApi
    reducerPath: "productsApi",  // reducerPath is productsApi
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ["product"],
    endpoints: (builder) => ({  // using builder can create enpoints
        products: builder.query<ApiDataObject, void>({
            query: () => '/products', // contacts is end point of the server
            providesTags: ['product']  // updating data 
        }),
        product: builder.query<ProductArray, any>({
            query: (id) => `products/${id}`,  //getting data of id
            providesTags: ['product']  // updating data 
        }),
        categories: builder.query<string[], void>({
            query: () => `/categories`,  //getting data of id
            providesTags: ['product']  // updating data 
        }),
        search: builder.query<string[], any>({
            query: (searchItem) => `/search?q=${searchItem}`,  //getting data of id
            providesTags: ['product']  // updating data 
        }),
    })
})

export const { useProductsQuery, useProductQuery, useCategoriesQuery, useSearchQuery } = productsApi;