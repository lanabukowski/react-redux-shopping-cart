import React from 'react';
import './productItem.css';

const ProductItem = ( {menuItem, onAddToCart}) => {
    const {name, prices, picture} = menuItem;
    return (
        <>
            <div className='productItemWrapper'>
                <div className='productItemBlock'>
                    <div className='productItemImg'><img width="150" height="150" src={picture}></img></div>
                    <div className='productItemTitle'>{name}</div>
                    <div className='price'>{prices} $</div>
                    <button onClick={() => onAddToCart()} className="button button-bag">Add to Bag</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem;
