import '../styles/componentH.css';
import { useReducer } from "react";

const initialState = {cart: []};

const products = [{
    id: 1,
    productName: 'IPhone 14 Pro',
    category: 'Mobile',
    price: '139999'
},
{
    id: 2,
    productName: 'IPhone 14',
    category: 'Mobile',
    price: '79999'
},
{
    id: 3,
    productName: 'OnePlus Nord 2',
    category: 'Mobile',
    price: '50000'
},
];



// {type: 'ADD_TO_CART', data: {}}
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART': {
            // const quantity = state.cart.reduce((total, product) => (product.id === action.data.id) ? product.quantity + 1 : product.quantity, 1);
            // const updatedCart = state.cart.find(product => product.id === action.data.id) ? state.cart.map((product) => {
            //     if(product.id === action.data.id){
            //         product.quantity = quantity;
            //     }
            //     return product;
            // }) : [...state.cart, {...action.data, quantity: quantity}];
            // return {cart: [...updatedCart]};
            return {cart: [...state.cart, {...action.data, quantity: 1}]}
        }
        case 'REMOVE_FROM_CART': {
            return {cart: state.cart.filter(data => data.id !== action.data.id)};
        }

        case 'EMPTY_CART': {
            return {cart: []};
        }

        default: {
            return state
        };
    }
}

const ComponentI = () => {
    const [state, dispatch]= useReducer(reducer, initialState);

    return (
        <div>
            ComponentI

            <h3>Products</h3>

            <div className="products-container">
                {products.map((product, index)  => (
                     <div key={index} className="product">
                        <h4>{product.productName}</h4>
                        <h4>₹ {product.price}</h4>
                        <h4>{product.category}</h4>
                        <button onClick={() => dispatch({type: "ADD_TO_CART", data: product})}>Add to cart</button>
                     </div>
                ))}
            </div>
            <h3>Cart Details</h3>
            {state.cart.length ? <button  onClick={() => dispatch({type: "EMPTY_CART"})}>Empty your cart</button> : <></>}
            <div className="products-container">
                {state.cart.length ? state.cart.map((product, index)  => (
                        <div key={index} className="product">
                            <h4>{product.productName}</h4>
                            <h4>₹ {product.price}</h4>
                            <h4>{product.category}</h4>
                            <h4>Quantity: {product.quantity}</h4>
                            <button  onClick={() => dispatch({type: "REMOVE_FROM_CART", data: product})}>Remove From Cart</button>
                        </div>
                        )) : 
                        <div>
                            <h3>Cart is empty</h3>
                        </div>
                        }
            </div>
        </div>
    )
}

export default ComponentI;