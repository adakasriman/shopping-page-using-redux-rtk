import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useCategoryQuery } from '../services/productsApi';
import { Product } from './Product';

export const Category: React.FC = () => {
    const { category } = useParams();
    const { data, error, isLoading, isFetching, isSuccess } = useCategoryQuery(category);
    console.log(data);
    const navigate = useNavigate();

    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }
    return (
        <div className='products bg_color-f2f2f2'>
            {
                data?.products.map(product => {
                    return <div key={product.id} className='product'>
                        <a onClick={() => viewProduct(product.id)}>
                            <Product singleProduct={product} />
                        </a>
                    </div>
                })
            }
        </div>
    )
}
