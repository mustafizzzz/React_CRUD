import React from 'react'

import { useSelector } from 'react-redux';

function Header() {
    const resultdata=useSelector((state)=>state.cartData);
    console.warn("Header ka  redux se");
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{resultdata.length}</span>
            <img src='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg'></img>
        </div>
    </div>
  )
}

export default Header;