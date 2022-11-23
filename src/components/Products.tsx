import React, { useState, useEffect } from 'react'
import { useProductsQuery, useSearchQuery } from '../services/productsApi';
import { Product, } from './Product';
import { useParams, useNavigate, useLocation, useSearchParams, } from 'react-router-dom';
import { ApiDataObject } from '../models/product.model';




export const Products: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
    useEffect(() => {
        if (data) {
            setProductData(data);
        }

    }, [data])


    const search = useLocation().search;

    const { state } = useLocation();
    const { query } = state || {};
    // const [searchParams, SetSearchParams] = useSearchParams();

    // const { id } = useParams();

    const navigate = useNavigate();

    // SetSearchParams({ q: query });
    const categories = () => {
        navigate(`/products/categories`);
        // navigate(`/filter`);
    }

    return (
        <div className="products bg_color-f2f2f2">
            <button className='filter_button' onClick={() => categories()}>
                <i className="fa-solid fa-filter"></i>
            </button>
            {
                productData?.products.map((product) => {
                    return <div key={product.id} className='product'>
                        {
                            product?.isDeleted ?

                                <></> : <a>
                                    <Product singleProduct={product} apiData={productData} setProductData={setProductData} />
                                </a>
                        }
                    </div>
                })
            }
        </div>
    )
}


