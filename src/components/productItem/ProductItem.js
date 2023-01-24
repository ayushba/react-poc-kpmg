import React from 'react';
import Addcart from '../AddCart/AddCart';

import './ProductItem.css'

const ProductItem = ({
    product
}) => {
    return (
        <div className='product-item-container'>
            <div
                style={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                <img src={product?.image} width="100%" height="100%" />
            </div>
            <p style={{ textAlign: "center" }}>{product?.title ?? "product title"}</p>
            <p className='product-description' >{product?.description}</p>
            <div className='item-footer '>
                <p>{product?.price ?? "price"}</p>
                <Addcart />
            </div>
        </div>
    )
}

export default ProductItem