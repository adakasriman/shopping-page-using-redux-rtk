import React, { useState, useEffect } from 'react'
import { useProductsQuery, useSearchQuery } from '../services/productsApi';
import { Product, } from './Product';
import { useParams, useNavigate, useLocation, useSearchParams, } from 'react-router-dom';


export const Products: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
    console.log(data);

    const { id } = useParams();

    const navigate = useNavigate();



    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }

    const categories = () => {
        navigate(`/products/categories`);
    }

    return (
        <div className="products bg_color-f2f2f2">
            <button className='filter_button' onClick={() => categories()}>
                <i className="fa-solid fa-filter"></i>
            </button>
            {
                data?.products.map(product => {
                    return <div key={product.id} className='product'>
                        <a onClick={() => viewProduct(product.id)}>
                            <Product singleProduct={product} />
                        </a>
                    </div>
                })
            }
        </div>
    )
}
