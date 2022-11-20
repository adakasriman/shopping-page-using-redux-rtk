import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useAddProductMutation } from '../services/productsApi';
import { useNavigate } from 'react-router-dom'


export const AddProduct: React.FC = () => {
    const { register, handleSubmit } = useForm();

    // const onSubmit = () => {
    //     // disPatch(addNewItem(data));
    //     // navigate("/");

    // };

    // const { data, refetch } = useProductQuery();
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate();

    const onSubmit = async (formData: FieldValues) => {
        // let lastObject = data?.at(-1)
        // let newId: any = lastObject?.id;
        let product = formData;
        await addProduct(product);

        navigate(`/products`);
    };



    return (
        <div className='add_products'>
            <h3 className='text_center'>Add Product</h3>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className='item'>
                    <label>Title</label>
                    <input type="text"{...register("title")} />
                </div>
                {/* <div className='item'>
                    <label>Price</label>
                    <input type="text" {...register("price")} />
                </div>
                <div className='item'>
                    <label>brand</label>
                    <input type="text" {...register("brand")} />
                </div>
                <div className='item'>
                    <label>Stock</label>
                    <input type="text" {...register("stock")} />
                </div>
                <div className='item'>
                    <label>Rating</label>
                    <input type="text" {...register("rating")} />
                </div>
                <div className='item'>
                    <label>Category</label>
                    <input type="text" {...register("category")} />
                </div>
                <div className='item'>
                    <label>Thumbnail</label>
                    <input type="text" {...register("thumbnail")} />
                </div>
                <div className='item'>
                    <label>Description</label>
                    <textarea {...register("description")} />
                </div> */}
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
