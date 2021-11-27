import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    selectCartItems,
    selectCartItemTotal,
} from "../../redux/cart/cartSelector";

import {
    CheckoutContainer,
    CheckoutHeaderContainer,
    CheckoutBlockContainer,
    TotalContainer,
    StripeButton,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = ({ cartItems, cartItemTotal }) => (
    <CheckoutContainer>
        <CheckoutHeaderContainer>
            <CheckoutBlockContainer>
                <span>Product</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Description</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Quantity</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Price</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer>
                <span>Remove</span>
            </CheckoutBlockContainer>
        </CheckoutHeaderContainer>

        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <TotalContainer>
            <span>Total: ${cartItemTotal}</span>
        </TotalContainer>

        <StripeButton price={cartItemTotal} />
    </CheckoutContainer>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemTotal: selectCartItemTotal,
});

export default connect(mapStateToProps)(Checkout);
