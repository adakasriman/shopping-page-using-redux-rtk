import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../services/productsApi';
import { AddProduct } from './AddProduct';

export const AddProductContainer: React.FC = () => {
    const { register, handleSubmit } = useForm(); // form hook

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
    }, [response?.data?.id]);

    return (
        <div>
            <AddProduct />
        </div>
    )
}
