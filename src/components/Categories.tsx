import React from 'react'
import { useCategoriesQuery } from '../services/productsApi';

import { useNavigate } from 'react-router-dom';


export const Categories: React.FC = () => {
    const { data, isLoading } = useCategoriesQuery();

    const navigate = useNavigate();

    const viewProduct = (product: string) => {
        navigate(`/products/category/${product}`);
    }
    return (

        <div>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : <div className='categories'>
                {
                    data?.map((product, index) => {
                        return <div key={index} className='item'>
                            <a onClick={() => viewProduct(product)}>
                                <div>{product}</div>
                            </a>
                        </div>
                    })
                }
            </div>
            }
        </div>
    )
}
