import React, {Component} from 'react';
import './productItemList.css';
import ProductItem from '../productItem/productItem';
import {connect} from 'react-redux';
import WithService from '../hoc/withService';
import {menuLoaded, menuRequested, menuError} from '../../actions/menuActions';
import Loading from '../loading/loading';
import Error from '../errorBoundry/errorBoundry';
import { addToCart } from '../../actions/cartActions';


class ProductItemList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {Service} = this.props;
        Service.getMenu()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError());
    }
    
    render() {
        const {menuItems, loading, error, addToCart} = this.props;
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Loading/>
        }


        const items = Object.keys(menuItems).map((item) => {
            const products = menuItems[item].map((product) => {
                return (<li>
                            <ProductItem 
                                key={product.id} 
                                menuItem={product}
                                onAddToCart={() => addToCart(product)}/>
                        </li>)
            })
            return (
                <>
                    <h1 className='categoryTitle'>{item}</h1>
                    <ul className='productsWrapper'>
                        {products}
                    </ul>
                </>
            )
        })

        return items;
    }
};


const mapStateToProps = (state) =>{
    return {
        menuItems: state.menuReducer.menu,
        loading: state.menuReducer.loading,
        error: state.menuReducer.error
    }
}

const mapDispatchToProps = {
        menuLoaded,
        menuRequested,
        menuError,
        addToCart
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ProductItemList));
