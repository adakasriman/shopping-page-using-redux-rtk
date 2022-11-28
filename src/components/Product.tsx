import React, { useEffect, useState } from 'react'
import { ApiDataObject, ProductArray } from '../models/product.model';
import { useDeleteMutation, useEditMutation } from '../services/productsApi';
import { useNavigate } from 'react-router-dom';

import { Popup } from './Popup';
import { Button } from './Button';


interface Props {
    singleProduct: ProductArray,
    setProductData: React.Dispatch<React.SetStateAction<ApiDataObject | undefined>>,
    apiData: ApiDataObject,
}


// close:  edit type

export const Product: React.FC<Props> = ({ singleProduct, setProductData, apiData }) => {
    const navigate = useNavigate();
    const [deletePost, response] = useDeleteMutation();
    const [updateProduct, updateResponse] = useEditMutation();



    // edit 
    const [updateItem, setUpdateItem] = useState<string>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [product, setProduct] = useState<any>();

    // const { register, handleSubmit, setValue, reset } = useForm({
    //     mode: "onChange",
    //     defaultValues: {
    //         productDetails: product
    //     }
    // });

    // close
    useEffect(() => {


        apiData = JSON.parse(JSON.stringify(apiData));
        if (response?.data?.isDeleted == true) {
            const index = apiData.products.findIndex((item: any) => item.id == response?.data?.id);
            if (index > -1) { // only splice array when item is found
                apiData.products.splice(index, 1); // 2nd parameter means remove one item only
            }
            setProductData(apiData);
        }

    }, [response?.data])

    useEffect(() => {
        apiData = JSON.parse(JSON.stringify(apiData));
        if (updateResponse?.data?.id) {
            const index = apiData.products.findIndex((item: any) => item.id == updateResponse?.data?.id);
            if (index > -1) { // only splice array when item is found
                apiData.products.splice(index, 1, updateResponse?.data); // 2nd parameter means remove one item only
            }
            setProductData(apiData);

        }

    }, [updateResponse?.data])

    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }

    // edit page


    function editProduct(id: number, product: ProductArray) {
        let editData = {
            id: product?.id,
            title: product?.title
        }
        setProduct(editData);
        setUpdateItem(product?.title);
        setIsOpen(!isOpen);
    }
    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        let editProduct = {
            id: product?.id,
            title: updateItem
        };

        updateProduct(editProduct);
        setIsOpen(!isOpen);

        // await addProduct(product);
    };

    const deleteproductHanculer = (id: number) => {
        deletePost(id);
    }



    // close: edit page

    return (
        <div>
            <div onClick={() => viewProduct(singleProduct.id)}>
                <img src={singleProduct.thumbnail} alt="product Img" />
                <div className='p_10 pt_0'>
                    <div className='product_title'>
                        {singleProduct.title}
                    </div>
                    <div className='displayFlex_spacebetween'>
                        <div className='rating'>{singleProduct.rating} <span>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </span></div>
                        <div className='stock_count'>stocks <span> {singleProduct.stock}</span></div>
                    </div>
                    <div className='displayFlex_center gap_15 price'>
                        <div>
                            <i className="fa-solid fa-indian-rupee-sign"></i>{singleProduct.price}
                        </div>
                        <span className='line_through'>{singleProduct.price + 100}</span>
                        <div className='discountPercentage'>{singleProduct.discountPercentage}% off</div>
                    </div>
                </div>
            </div >
            <div className='displayFlex_spacebetween gap_15 mt_10'>

                <Button type="button" title='Delete' className='delete' deleteproductHanculer={() => deleteproductHanculer(singleProduct?.id)} />

                {/* <div className="delete cursor-pointer" onClick={() => deletePost(singleProduct?.id)}> Delete</div> */}
                {/* <div className="edit cursor-pointer" onClick={() => editProduct(singleProduct?.id, singleProduct)}>Edit</div> */}

                <Button type="button" title='Edit' className='edit' editProduct={() => editProduct(singleProduct?.id, singleProduct)} />

            </div>
            {
                isOpen && <Popup content={
                    <div className='width_100'>
                        <h3 className='text_center color_2a978b'>Update product</h3>
                        <hr />
                        <div className='cartView'>
                            <form onSubmit={onSubmit}>
                                <div className='item'>
                                    <label>Title</label>
                                    <input type="text" value={updateItem} onChange={(e) => setUpdateItem((e.target.value))} name="title" />
                                </div>
                                {/* <div className='item'>
                                    <label>Price</label>
                                    <input type="text" {...register("productDetails.price")} name="price" />
                                </div>
                                <div className='item'>
                                    <label>brand</label>
                                    <input type="text" {...register("productDetails.brand")} name="brand" />
                                </div>
                                <div className='item'>
                                    <label>Stock</label>
                                    <input type="text" {...register("productDetails.stock")} name="stock" />
                                </div>
                                <div className='item'>
                                    <label>Rating</label>
                                    <input type="text" {...register("productDetails.rating")} name="rating" />
                                </div>
                                <div className='item'>
                                    <label>Category</label>
                                    <input type="text" {...register("productDetails.category")} name="category" />
                                </div>
                                <div className='item'>
                                    <label>Description</label>
                                    <textarea {...register("productDetails.description")} name="description" />
                                </div> */}

                                {/* <button type='submit'>Update</button> */}
                                <Button type="submit" title='Update' />


                            </form>
                        </div>
                    </div>} handleClose={editProduct} />
            }
        </div>
    )
}



