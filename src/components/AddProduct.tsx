import React, { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useAddProductMutation } from '../services/productsApi';
import { useNavigate } from 'react-router-dom'


export const AddProduct: React.FC = () => {
    const { register, handleSubmit, setValue, reset } = useForm(); // form hook

    const [addProduct, response] = useAddProductMutation();
    const navigate = useNavigate();


    const onSubmit = async (formData: FieldValues) => {
        await addProduct(formData);
    };

    useEffect(() => {
      
        if (response?.data?.id) {

            sessionStorage.setItem("newProduct", JSON.stringify(response.data));
            navigate(`/products`);
        }

    }, [response?.data?.id])




    return (
        <div className='add_products'>
            <h3 className='text_center'>Add Product</h3>

            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className='fields'>
                    <div className='item'>
                        <label>Title</label>
                        <input type="text"{...register("title")} name="title" required />
                    </div>
                    <div className='item'>
                        <label>Price</label>
                        <input type="number" {...register("price")} name="price" required />
                    </div>
                    <div className='item'>
                        <label>brand</label>
                        <input type="text" {...register("brand")} name="brand" required />
                    </div>
                    <div className='item'>
                        <label>Stock</label>
                        <input type="number" {...register("stock")} name="stock" required />
                    </div>
                    <div className='item'>
                        <label>Rating</label>
                        <input type="number" {...register("rating")} name="rating" required />
                    </div>
                    <div className='item'>
                        <label>Category</label>
                        <input type="text" {...register("category")} name="category" required />
                    </div>
                    {/* <div className='item'>
                    <label>Thumbnail</label>
                    <input type="text" {...register("thumbnail")} />
                </div> */}
                    <div className='item'>
                        <label>Description</label>
                        <textarea {...register("description")} name="description" required />
                    </div>
                </div>
                <div className='add_button'>
                    <button type="submit">Add product</button>
                </div>
            </form>
        </div>
    )
}

