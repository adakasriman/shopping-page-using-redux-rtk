import React, { useEffect, useState } from 'react';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { useAddProductMutation, useProductQuery } from '../services/productsApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ApiDataObject, ProductArray } from '../models/product.model';


export const AddProduct: React.FC = () => {

    const [paramsId, setParamsId] = useState<string>("");

    const location = useLocation();

    // console.log(location.state);


    const { register, handleSubmit, setValue, reset } = useForm();

    // const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    //     control, // control props comes from useForm (optional: if you are using FormContext)
    //     name: "test", // unique name for your Field Array
    // });

    const { id } = useParams<string>();
    // if (id) {
    const { data } = useProductQuery(id);
    console.log(data);


    useEffect(() => {
        id ? setParamsId(id) : setParamsId("");

        if (data) {
            setValue('productDetails', { title: data?.title, price: data?.price, brand: data?.brand, stock: data?.stock, rating: data?.rating, category: data?.category, description: data?.description });
        }

        // if (location?.state) {
        console.log(location.state);
        // }/



    }, [data])

    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate();

    const onSubmit = async (formData: FieldValues) => {
        console.log(formData);

        // let product = formData;
        // await addProduct(product);

        // navigate(`/products`);
    };



    return (
        <div className='add_products'>
            {
                paramsId ? <h3 className='text_center'>Edit Product</h3> : <h3 className='text_center'>Add Product</h3>
            }
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className='item'>
                    <label>Title</label>
                    <input type="text"{...register("productDetails.title")} name="title" />
                </div>
                <div className='item'>
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
                {/* <div className='item'>
                    <label>Thumbnail</label>
                    <input type="text" {...register("thumbnail")} />
                </div> */}
                <div className='item'>
                    <label>Description</label>
                    <textarea {...register("productDetails.description")} name="description" />
                </div>
                {
                    paramsId ? <button type='submit'>Update</button> : <button type='submit'>submit</button>
                }
            </form>
        </div>
    )
}

