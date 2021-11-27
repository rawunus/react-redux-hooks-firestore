import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const stripeApiKey = "pk_test_VChSB6vfztFn4O3VLyk44DL8";
    const priceForStripe = price * 100;
    const token = () => {
        console.log("payment successfull");
        alert("payment successfull " + "$" + price);
    };
    return (
        <div className="stripe-checkout">
            <StripeCheckout
                label="Pay Now"
                name="Clothing Store"
                description={`Stripe checkout $${price}`}
                amount={priceForStripe}
                stripeKey={stripeApiKey}
                currency="USD"
                shippingAddress
                billingAddress
                token={token}
            />
        </div>
    );
};

export default StripeCheckoutButton;
