import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IKDalIq3oFiOfUjBV0pXh8yj6msL6LDMCg4XvFIO2ap06asOLsr8k0FnQzlakTAtD1ZAFVzehYPvzP0eb35mbdY002diT4Izy';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Digital Threads'
      billingAddress
      shippingAddress
      image='https://media.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy.gif'
      // image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
