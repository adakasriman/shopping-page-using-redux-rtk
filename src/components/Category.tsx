import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiDataObject } from '../models/product.model';
import { useCategoryQuery } from '../services/productsApi';
// import { Filters } from './Filters';
import { Product } from './Product';

export const Category: React.FC = () => {
    const [productData, setProductData] = useState<ApiDataObject>();
    const { category } = useParams<string>();
    const { data, isLoading } = useCategoryQuery(category);
    useEffect(() => {
        if (data) {
            setProductData(data);
        }

    }, [data])

    // const getFilterData = (filtersData: any) => {
    //     console.log(filtersData);
    // }

    return (

        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : <div>
                {/* <div className="filters">
                    <Filters getFilterData={(filtersData: any) => getFilterData(filtersData)} />
                </div> */}
                <div className='products bg_color-f2f2f2'>
                    {productData &&
                        productData?.products.map(product => {
                            return <div key={product.id} className='product'>
                                <Product singleProduct={product} apiData={productData} setProductData={setProductData} />
                            </div>
                        })
                    }
                </div>
            </div>
            }
        </div>
    )
}
