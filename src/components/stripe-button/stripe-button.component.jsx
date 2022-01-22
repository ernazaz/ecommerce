import React from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KKjcjKa0QSUN3RGqMUyBQNv9S9NB7J08QWGmxw0We5kDiedkGAUI49MQcomPTip8DOLeo8xLrXkgBpYx2Y7iy3F00qdCvjqty';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Yout total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;