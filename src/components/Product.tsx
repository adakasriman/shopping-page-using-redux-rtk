import React, { useEffect } from 'react'
import { ApiDataObject, ProductArray } from '../models/product.model';
import { useDeleteMutation } from '../services/productsApi';
import { useParams, useNavigate, useLocation, useSearchParams, } from 'react-router-dom';


interface Props {
    singleProduct: ProductArray,
    setProductData: React.Dispatch<React.SetStateAction<ApiDataObject | undefined>>,
    apiData: ApiDataObject
}
export const Product: React.FC<Props> = ({ singleProduct, setProductData, apiData }) => {
    const [deletePost, response] = useDeleteMutation()

    const navigate = useNavigate();
    useEffect(() => {
        apiData = JSON.parse(JSON.stringify(apiData));
        if (response?.data?.isDeleted == true) {
            const index = apiData.products.findIndex((item: any) => item.id == response?.data?.id);
            console.log(index);
            if (index > -1) { // only splice array when item is found
                apiData.products.splice(index, 1); // 2nd parameter means remove one item only
            }
            setProductData(apiData);
        }
    }, [response?.data])

    const viewProduct = (id: number) => {
        navigate(`/products/product/${id}`);
    }

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
                <div className="delete cursor-pointer" onClick={() => deletePost(singleProduct?.id)}> Delete</div>
                <div className="edit cursor-pointer">Edit</div>
            </div>
        </div>
    )
}



