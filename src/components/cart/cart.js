import React from 'react';
import './cart.css'
import {connect} from 'react-redux';
import {removeFromCart, addCartQuantity, subCartQuantity} from '../../actions/cartActions';
import WithService from '../hoc/withService';

const Cart = (props) => {
    const {products, removeFromCart, addCartQuantity, subCartQuantity, total} = props;
    if (products.length == 0) {
        return <div className='emptyCart'>Cart is empty</div>
    } 
    return (
        <div>
        {
            products.map(product => {
                const {name, prices, picture, id, qnt} = product;
                return (
                    <div className='cartWrapper' key={id}>
                        <div className='cartItemInfo'>
                            <div className='cartItemImg'><img width="100" height="100" src={picture}></img></div>
                            <div className='cartItemTitle'>{name}</div>
                            <div className='cartPrice'>{prices} $</div>
                        </div>
                        <div className="quantityBlock">
                            <button onClick={() => subCartQuantity(product)} type="button" className="button minus">-</button>
                            <div className='count'>{qnt}</div>
                            <button onClick={() => addCartQuantity(product)} type="button" className="button plus">+</button>
                        </div>
                        <div className='closeBlock'>
                            <button onClick={() => removeFromCart(product)} className=' button close'>X</button>
                        </div>
                    </div>
                );
            })
        }
            <div className='totalBlock'>
                <div className='total'>Total: {total} $</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products,
        total: state.cartReducer.total,
    }
}

const mapDispatchToProps =  {
    removeFromCart,
    addCartQuantity,
    subCartQuantity
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(Cart));


