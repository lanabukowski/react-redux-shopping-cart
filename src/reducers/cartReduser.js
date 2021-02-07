const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            const product = action.payload;
            if (state.products.find(item => item.id === product.id)) {
                const plusState = state.products.map(item => {
                    if(item.id === product.id) {
                        item.qnt++
                    } return item;
                })
                return {
                    ...state,
                    products: plusState,
                    total: state.total + Number(product.prices),
                    quantity: state.quantity + 1
                };
            } else {
                product.qnt = 1;
                const newState = {
                    ...state,
                    products: [
                        ...state.products,
                        product
                    ],
                    total: state.total + Number(product.prices),
                    quantity: state.quantity + 1
                };
                return newState;
            }
        case "REMOVE_FROM_CART": 
            const removed = action.payload;
            const indexRemoved = state.products.findIndex(product => product.id === removed.id);
            return {
                ...state,
                products: [
                    ...state.products.slice(0, indexRemoved),
                    ...state.products.slice(indexRemoved + 1)
                ],
                total: state.total - Number(removed.prices*removed.qnt),
                quantity: state.quantity - removed.qnt
            };
        case "ADD_CART_QUANTITY": 
            const productAdd = action.payload;
            const addState = state.products.map(product => {
                if(product.id === productAdd.id) {
                    product.qnt++
                } return product;
            })
            return {
                ...state,
                products: addState,
                total: state.total + Number(productAdd.prices),
                quantity: state.quantity + 1
            };
        case "SUB_CART_QUANTITY":
            const productSub = action.payload;
            const subState = state.products.map(product => {
                if(product.id === productSub.id) {
                    product.qnt--
                } return product;
            });
            const positivState = state.products.filter(product => {
                if(product.qnt > 0) {
                    return product
                }
            })
            return {
                ...state,
                products: positivState,
                total: state.total - Number(productSub.prices),
                quantity: state.quantity - 1
            };
        default: return state
    }
}

export default cartReducer;

