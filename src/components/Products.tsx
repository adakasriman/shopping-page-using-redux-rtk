import React, { useState, useEffect } from 'react'
import { useProductsQuery } from '../services/productsApi';
import { Product, } from './Product';

export const Products: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
    console.log("data", data?.products);

    return (
        <div  className="products">
            {
                data?.products.map(product => {
                    return <div key={product.id}  className='product'>
                        <Product singleProduct={product} />
                    </div>
                })
            }
        </div>
    )
}
