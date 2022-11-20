import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ApiDataObject } from '../models/product.model';
import { useCategoryQuery } from '../services/productsApi';
import { Product } from './Product';

export const Category: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const { category } = useParams<string>();
    const { data, error, isLoading, isFetching, isSuccess } = useCategoryQuery(category);
    useEffect(() => {
        if (data) {
            setProductData(data);
        }

    }, [data])
    console.log(data);
    const navigate = useNavigate();


    return (
        <div className='products bg_color-f2f2f2'>
            {
                productData?.products.map(product => {
                    return <div key={product.id} className='product'>
                        <Product singleProduct={product} apiData={productData} setProductData={setProductData} />
                    </div>
                })
            }
        </div>
    )
}
