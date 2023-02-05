import '../styles/componentH.css';
import { useReducer } from "react";

const initialData = {count: 0};
const initialCart = [];

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

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': {
            return {count: state.count + 1};
        }
        case 'DECREMENT': {
            return {count: state.count - 1};
        }

        case 'RESET': {
            return {count: 0};
        }

        default: {
            return state
        };
    }
}

const ComponentH = () => {
    // const [state, dispatch]= useReducer(reducer, initialData);

    return (
        <div>
            ComponentH
            {/* <h3>Count: {state.count}</h3>
            <div>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>Click to Increment</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>Click to Decrement</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Click to Reset</button>
            </div> */}

            <h3>Products</h3>

            <div className="products-container">
                {products.map((product, index)  => (
                     <div key={index} className="product">
                        <h4>{product.productName}</h4>
                        <h4>₹ {product.price}</h4>
                        <h4>{product.category}</h4>
                        <button>Add to cart</button>
                     </div>
                ))}
            </div>
        </div>
    )
}

export default ComponentH;