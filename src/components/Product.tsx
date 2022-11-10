import React from 'react'
import { ProductArray } from '../models/product.model'

interface Props {
    singleProduct: ProductArray
}
export const Product: React.FC<Props> = ({ singleProduct }) => {
    return (
        <div>
            <div>
                {singleProduct.id}
            </div>
        </div>
    )
}
