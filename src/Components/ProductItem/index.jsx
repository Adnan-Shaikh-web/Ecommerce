import React from 'react'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button';
import { BiFullscreen } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";

const ProductItem = () => {
    return (
        <div className="item productItem w-100">
            <div className="imgWrapper">
                <img src="https://m.media-amazon.com/images/I/41r8GHHNh5L._SX300_SY300_QL70_FMwebp_.jpg" className='w-100' alt="" />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button><BiFullscreen /></Button>
                    <Button><CiHeart style={{ fontSize: '20px' }} /></Button>
                </div>
            </div>


            <div className="info">
                <h4>Werther's Origin Caramel Hard Candies</h4>
                <span className='text-success d-block'>In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={4.5} readOnly size="small" precision={0.5} />
                <p className="d-flex">
                    <span className='oldPrice'>$20.00</span>
                    <span className='netPrice text-danger ml-3'>$14.00</span>

                </p>
            </div>
        </div>
    )
}

export default ProductItem
