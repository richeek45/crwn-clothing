import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { useSelector, useDispatch } from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = () => {
  const itemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return(
  <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemsCount}</span>
  </div>
)}


export default CartIcon;