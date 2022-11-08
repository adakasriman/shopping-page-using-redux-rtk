import React from 'react'
import { useProductsQuery } from '../services/productsApi';

export const Products: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
    return (
        <div>
            
        </div>
    )
}
