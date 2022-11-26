import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate, useParams } from 'react-router-dom'
import { useProductQuery } from '../services/productsApi';

export const ProductView: React.FC = () => {
    const { id } = useParams<string>();
    const { data } = useProductQuery(id);

    const navigate = useNavigate();

    const backToProducts = () => {
        navigate(`/products`);
    }

    return (
        <div className='product_view'>
            {
                data && <div className='display_flex bg_color'>
                    <div>
                        <SimpleImageSlider
                            width={500}
                            height={529}
                            images={data?.images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className='p_15 product_content'>
                        <div className='p_10 pt_0'>
                            <div className='product_title'>
                                {data?.title}
                            </div>
                            <div className='displayFlex_spacebetween pt_20'>
                                <div className='rating'>{data?.rating} <span>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </span></div>
                                <div className='stock_count'>stocks <span> {data?.stock}</span></div>
                            </div>
                            <div className='mt_10'>
                                <div className='mt_10 fw_6'>Special Price</div>
                                <div className='displayFlex_center gap_15 price mt_10'>

                                    <div>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{data?.price}
                                    </div>
                                    <span className='line_through'>{data?.price + 100}</span>
                                    <div className='discountPercentage'>{data?.discountPercentage}% off</div>
                                </div>
                            </div>

                            <div>
                                <div className='mt_10 fw_6'>description</div>
                                <div className='mt_10'>{data?.description}</div>
                            </div>

                        </div>
                        <div className='cartAndAdd_btn'>
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                        </div>
                        <div className='cartAndAdd_btn'>
                            <button onClick={() => backToProducts()}>Back to Products</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
