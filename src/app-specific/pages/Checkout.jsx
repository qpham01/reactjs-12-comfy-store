import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { CheckoutForm, CartTotals } from '../components';
import { SectionTitle } from '../../reusable/components';

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

export const checkoutAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return null;
  };

const Checkout = () => {
  const itemCount = useSelector((state) => state.cartState.itemCount);
  if (itemCount === 0) {
    return <SectionTitle title='no items in cart' />;
  }
  return (
    <>
      <SectionTitle title='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
