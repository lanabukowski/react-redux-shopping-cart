import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ProductItemList from '../../components/productItemList/productItemList';


const mainPage = () => {
    return (
        <div>
            <Header/>
            <ProductItemList/>
            <Footer/>
        </div>
    )
}

export default mainPage;