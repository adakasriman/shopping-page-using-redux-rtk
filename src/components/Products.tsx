import React, { useState, useEffect } from 'react'
import { useProductsQuery, useSerchFilterQuery } from '../services/productsApi';
import { Product, } from './Product';
import { useNavigate, useLocation, useSearchParams, } from 'react-router-dom';
import { ApiDataObject, ProductArray } from '../models/product.model';
import { Filters } from './Filters';
import { Paginations } from './Paginations';


export const Products: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const [filtersData, setFiltersData] = useState<ApiDataObject | null>();

    const [perPageData, setPerPageData] = useState<ProductArray[]>()

    const [PerPage, setPerPage] = useState<number>(1);


    let { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
    // if (filtersData.limit || filtersData.skip || filtersData.search || filtersData.price) {
    // }
    // let [] = useSerchFilterQuery(filtersData);
    useEffect(() => {
        if (data) {
            setProductData(data);
            setPerPageData(data?.products?.slice(PerPage * 8 - 8, PerPage * 8));
        }

        console.log(perPageData);

    }, [data, PerPage])
    useEffect(() => {
        console.log(filtersData);

        if (filtersData) {
            setProductData(filtersData);
        } else {
            setProductData(data);
        }
    }, [filtersData])

    // const search = useLocation().search;

    // const { state } = useLocation();
    // const { query } = state || {};

    const navigate = useNavigate();

    const categories = () => {
        navigate(`/products/categories`);
        // navigate(`/filter`);
    }



    const getFilterData = (filter_data: ApiDataObject | null) => {

        // setProductData(filtersData);
        setFiltersData(filter_data);


    }

    console.log(productData?.products);


    return (
        <div>
            <div className="filters">
                <Filters getFilterData={(filtersData: any) => getFilterData(filtersData)} />
            </div>
            <div className="products bg_color-f2f2f2">
                {/* <button className='filter_button' onClick={() => categories()}>
                    <i className="fa-solid fa-filter"></i>
                </button> */}
                {perPageData &&
                    perPageData?.map((product: ProductArray) => {
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

                <div className='pagination'>
                    <Paginations products={productData?.products} setPerPage={setPerPage} PerPage = {PerPage} />
                </div>
            </div>
        </div>
    )
}


