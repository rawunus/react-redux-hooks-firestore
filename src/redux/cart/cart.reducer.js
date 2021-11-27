import cartActionTypes from "./cart.action.type";
import { addItemToCart, removeItemFromCart } from "./cartUtils";
import userActionTypes from "../user/user.action.types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };

        // Remive item form cart by decreacing by quantity
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };

        // Remove the item from the checkout page
        // case cartActionTypes.CLEAR_ITEM_FROM_CART:
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.filter(
        //             (cartItem) => cartItem.id !== action.payload.id
        //         ),
        //     };

        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };

        // Remove the item from the cart when user is signout successfully
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
