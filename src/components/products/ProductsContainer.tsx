import React, { useState, useEffect } from 'react'
import { useDeleteMutation, useEditMutation, useProductsQuery } from '../../services/productsApi';
import { Product, } from './Product';
import { useNavigate } from 'react-router-dom';
import { ApiDataObject, ProductArray } from '../../models/product.model';
import { Filters } from '../filters/Filters';
import { Paginations } from '../pagination/Paginations';


export const Products: React.FC = () => {
    //handling api Data
    const [productData, setProductData] = useState<ApiDataObject>();

    // Handling Filters
    const [filtersData, setFiltersData] = useState<ApiDataObject | null>();

    //
    const [product, setProduct] = useState<any>();

    const [perPageData, setPerPageData] = useState<ProductArray[]>()

    const [PerPage, setPerPage] = useState<number>(1);

    //update product
    const [updateItem, setUpdateItem] = useState<string>();

    const navigate = useNavigate();

    // API's fatching

    //--> fetching data, updateing and delete 
    let { data, isLoading } = useProductsQuery();
    const [deletePost, response] = useDeleteMutation();
    const [updateProduct, updateResponse] = useEditMutation();

    //---> data assing to hook variable
    useEffect(() => {
        if (data) {
            setProductData(data);
            // setPerPageData(data?.products?.slice(PerPage * 8 - 8, PerPage * 8));
        }
        let newProduct = JSON.parse(JSON.stringify(sessionStorage.getItem("newProduct")));

        setProduct(JSON.parse(newProduct));

    }, [data])

    //---< close:  fetching products data

    //---> updating products data based on filters

    useEffect(() => {

        if (filtersData) {
            setProductData(filtersData);
        } else {
            setProductData(data);
        }
    }, [filtersData]);

    //---< close: updating products data based on filters


    //---> paginations

    useEffect(() => {
        if (productData?.products) {
            setPerPageData(productData?.products?.slice(PerPage * 8 - 8, PerPage * 8));
        }
    }, [PerPage, data, filtersData, productData]);

    //---< close: paginations


    //---> Adding new product into existed array
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
    }, [product, PerPage]);

    //---< close: addProduct


    //--->Delete Product 

    useEffect(() => {
        if (productData) {
            let apiData = JSON.parse(JSON.stringify(productData));
            if (response?.data?.isDeleted == true) {
                const index = apiData.products.findIndex((item: any) => item.id == response?.data?.id);
                if (index > -1) { // only splice array when item is found
                    apiData.products.splice(index, 1); // 2nd parameter means remove one item only
                }
                setProductData(apiData);
            }
        }

    }, [response?.data])

    //---> close: Delete Product

    //--->Update Product 

    useEffect(() => {
        if (productData) {
            debugger
            let apiData = JSON.parse(JSON.stringify(productData));
            if (updateResponse?.data?.id) {
                const index = apiData.products.findIndex((item: any) => item.id == updateResponse?.data?.id);
                if (index > -1) { // only splice array when item is found
                    apiData.products.splice(index, 1, updateResponse?.data); // 2nd parameter means remove one item only
                }
                setProductData(apiData);

            }
        }

    }, [updateResponse?.data])

    //---> close: Update Product


    // 
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
                                                <Product singleProduct={product} apiData={productData} deletePost={deletePost} updateProduct={updateProduct} />
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


