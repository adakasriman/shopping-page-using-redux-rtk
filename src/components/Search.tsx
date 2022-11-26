import React, { useEffect, useState } from 'react';
import { useSearchQuery } from '../services/productsApi';
import { useSearchParams } from 'react-router-dom';
import { Product } from './Product';
import { ApiDataObject, ProductArray } from '../models/product.model';
// import { Filters } from './Filters';

export const Search: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const [searchItem, setSearchitem] = useState<any>()
    const [searchParams, SetSearchParams] = useSearchParams();
    const { data, isLoading } = useSearchQuery(searchItem);

    let value = sessionStorage.getItem("searchData");
    useEffect(() => {
  
        setSearchitem(value);
        if (value) {
            SetSearchParams({ q: value?value :searchItem});
        }
    }, [searchItem,value]);



    useEffect(() => {
        if (data) {
            setProductData(data);
        }
    }, [data])


    // const getFilterData = (filtersData: any) => {

    // }

    return (
        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : productData ? (
                <>
                    {/* <div className="filters">
                        <Filters getFilterData={(filtersData: any) => getFilterData(filtersData)} />
                    </div> */}
                    <div className='products bg_color-f2f2f2'>
                        {
                            productData?.products.length ? data?.products.map((product: ProductArray) => {
                                return <div key={product.id} className='product'>
                                    <Product singleProduct={product} apiData={productData} setProductData={setProductData} />
                                </div>
                            }) : <div>
                                <h3 className='no_data'>No Data</h3>
                            </div>
                        }


                    </div>
                </>
            ) : null
            }

        </div>
    )
}
