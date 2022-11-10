import React from 'react'
import { useCategoriesQuery } from '../services/productsApi';

export const Categories: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useCategoriesQuery();
    console.log(data);
    
    return (
        <div>Categories</div>
    )
}
