const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}

const addCartQuantity = (product) => {
    return {
        type: 'ADD_CART_QUANTITY',
        payload: product
    }
};

const subCartQuantity = (product) => {
    return {
        type: 'SUB_CART_QUANTITY',
        payload: product
    }
};

export {
    addToCart,
    removeFromCart,
    addCartQuantity,
    subCartQuantity
};