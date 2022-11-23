import React, { useEffect, useState } from 'react';
import { useSearchQuery } from '../services/productsApi';
import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Product } from './Product';
import { ApiDataObject } from '../models/product.model';
import { Filters } from './Filters';

export const Search: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const search = useLocation().search;

    const { state } = useLocation();
    const { query } = state || {};
    const [searchParams, SetSearchParams] = useSearchParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            SetSearchParams({ q: query });
        }

        if (query == "") {
            navigate(`/products`);
        }
    }, [query]);

    const queryname: any = new URLSearchParams(search).get('q');
    const { data } = useSearchQuery(queryname);
    useEffect(() => {
        if (data) {
            setProductData(data);
        }

    }, [data])


    const getFilterData = (filtersData: any) => {

    }

    return (
        <div>
            <div className="filters">
                <Filters getFilterData={(filtersData: any) => getFilterData(filtersData)} />
            </div>
            <div className='products bg_color-f2f2f2'>
                {
                    productData?.products.length ? data?.products.map(product => {
                        return <div key={product.id} className='product'>
                            <Product singleProduct={product} apiData={productData} setProductData={setProductData} />
                        </div>
                    }) : <div>
                        <h3 className='no_data'>No Data</h3>
                    </div>
                }


            </div>
        </div>
    )
}
