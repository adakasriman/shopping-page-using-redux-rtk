import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button';
import { ProductArray } from '../../models/product.model';

type Props = {
    productData: ProductArray | undefined
}
export const ProductView: React.FC<Props> = ({ productData }) => {

    const navigate = useNavigate();

    const backToProducts = () => {
        navigate(`/products`);
    }

    return (
        <div>

            {
                productData &&
                <div className='display_flex bg_color'>
                    <div>
                        <SimpleImageSlider
                            width={500}
                            height={529}
                            images={productData?.images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className='p_15 product_content'>
                        <div className='p_10 pt_0'>
                            <div className='product_title'>
                                {productData?.title}
                            </div>
                            <div className='displayFlex_spacebetween pt_20'>
                                <div className='rating'>{productData?.rating} <span>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </span></div>
                                <div className='stock_count'>stocks <span> {productData?.stock}</span></div>
                            </div>
                            <div className='mt_10'>
                                <div className='mt_10 fw_6'>Special Price</div>
                                <div className='displayFlex_center gap_15 price mt_10'>

                                    <div>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{productData?.price}
                                    </div>
                                    <span className='line_through'>{productData?.price + 100}</span>
                                    <div className='discountPercentage'>{productData?.discountPercentage}% off</div>
                                </div>
                            </div>

                            <div>
                                <div className='mt_10 fw_6'>description</div>
                                <div className='mt_10'>{productData?.description}</div>
                            </div>

                        </div>
                        {/* <div className='cartAndAdd_btn'>
                                <button  disabled>Add To Cart</button>
                                <button disabled>Buy Now</button>
                            </div> */}
                        <div className='cartAndAdd_btn'>
                            {/* <button onClick={() => backToProducts()}>Back to Products</button> */}
                            <Button type='button' title="Back to Products" backToProducts={() => backToProducts()} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
