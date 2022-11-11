import React from 'react'
import { ProductArray } from '../models/product.model';


interface Props {
    singleProduct: ProductArray
}
export const Product: React.FC<Props> = ({ singleProduct }) => {
    return (
        <div>
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
        </div>
    )
}



