import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItemList, CartTotals } from '../components';
import { SectionTitle } from '../../reusable/components';

const Cart = () => {
  // temp
  const user = useSelector((state) => state.userState.user);
  const numCartItems = useSelector((state) => state.cartState.itemCount);
  if (numCartItems === 0) {
    return <SectionTitle title='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle title='Shopping Cart' />
      <div className='mt-8 grid gap-8 md:grid-cols-12'>
        {/* Use divs to separate the list from the totals with col-span */}
        <div className='md:col-span-8'>
          <CartItemList />
        </div>
        <div className='md:col-span-4 md:pl-2'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              proceed to checkout
            </Link>
          ) : (
            <Link className='btn btn-primary btn-block mt-8' to='/login'>
              login to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
