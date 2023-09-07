
import { useDispatch } from 'react-redux';
import {addToCart}from '../reduxcomp/action';

function Main() {
  const dispatch= useDispatch();
  const product={
    name:"Iphone",
    type:'mobile',
    price:1000,
    colour:"Red"

  }
  return (
    <div>
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default Main;
