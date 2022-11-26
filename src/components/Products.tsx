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
    const [product, setProduct] = useState<any>();

    const [perPageData, setPerPageData] = useState<ProductArray[]>()

    const [PerPage, setPerPage] = useState<number>(1);
    const navigate = useNavigate();

    let { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();

    useEffect(() => {

        if (data) {
            setProductData(data);
            // setPerPageData(data?.products?.slice(PerPage * 8 - 8, PerPage * 8));
        }

        let newProduct = JSON.parse(JSON.stringify(sessionStorage.getItem("newProduct")));

        setProduct(JSON.parse(newProduct));

    }, [data])
    useEffect(() => {

        if (filtersData) {
            setProductData(filtersData);
        } else {
            setProductData(data);
        }
    }, [filtersData]);

    useEffect(() => {
        if (productData?.products) {
            setPerPageData(productData?.products?.slice(PerPage * 8 - 8, PerPage * 8));
        }



    }, [PerPage, data, filtersData, productData]);


    useEffect(() => {


        if (product && productData) {

            var apidata = JSON.parse(JSON.stringify(productData));

            if (apidata?.products.find((item: ProductArray) => item.id != product.id)) {

                if (productData?.products.find((item: ProductArray) => item.id == product.id)) {
                    sessionStorage.removeItem("newProduct");
                } else {
                    apidata?.products.push(product);

                }

            }

            if (apidata) {

                setProductData(apidata);
            }


        }

        // if (productData) {
        //     setProductData(apidata);
        // }
    }, [product, PerPage]);


    // const search = useLocation().search;

    // const { state } = useLocation();
    // const { query } = state || {};



    const categories = () => {
        navigate(`/products/categories`);
        // navigate(`/filter`);
    }



    const getFilterData = (filter_data: ApiDataObject | null) => {

        // setProductData(filtersData);
        setFiltersData(filter_data);


    }

    return (

        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : productData ? (
                <>
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
                            <Paginations products={productData?.products} setPerPage={setPerPage} PerPage={PerPage} />
                        </div>
                    </div>
                </>
            ) : null
            }
        </div>
    )
}


