import React from 'react'
import { ProductArray } from '../models/product.model';
import SimpleImageSlider from "react-simple-image-slider";

interface Props {
    singleProduct: ProductArray
}
export const Product: React.FC<Props> = ({ singleProduct }) => {
    return (
        <div>
            <div className='sliderImgs'>
                <SimpleImageSlider
                    width={305}
                    height={200}
                    images={singleProduct.images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
            <div>
                <div>
                    {singleProduct.title}
                </div>
                
            </div>
        </div>
    )
}



