import React, { useEffect, useState } from 'react';
import { useSearchQuery } from '../services/productsApi';
import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Product } from './Product';

export const Search: React.FC = () => {
    const [searchParams, SetSearchParams] = useSearchParams();
    // const [queryData, setQueryData] = useState<string | any>(searchParams.get('q'))
    const navigate = useNavigate();

    const search = useLocation().search;

    const { state } = useLocation();
    const { query } = state || {};

    useEffect(() => {
        if (query) {
            SetSearchParams({ q: query });
        }

    }, [])
    const queryname: any = new URLSearchParams(search).get('q');
    const { data } = useSearchQuery(queryname);

    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }
    
    return (
        <div className='products bg_color-f2f2f2'>
            {
                data?.products.length ? data?.products.map(product => {
                    return <div key={product.id} className='product'>
                        <a onClick={() => viewProduct(product.id)}>
                            <Product singleProduct={product} />
                        </a>
                    </div>
                }) : <div>
                    <h3 className='no_data'>No Data</h3>
                </div>
            }


        </div>
    )
}
