import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selector';

import CheckoutItem from '../../checkout-item/checkout-item';
import StripeCheckoutButton from '../../stripe-button/stripe-button';

import './checkout.scss';


const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  
  
  return (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => 
     ( <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    )}

    <div className='total'>${total}</div>
    <div className='test-warning' >
      *Please use the following test credit-card for payments*
      <br/>
      4242 4242 4242 4242 Exp- 01/22 CVV - 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)}


export default CheckoutPage;

