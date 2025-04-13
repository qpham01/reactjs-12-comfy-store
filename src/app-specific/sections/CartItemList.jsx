import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </>
  );
};
export default CartItemList;
