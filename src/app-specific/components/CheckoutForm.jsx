import { Form, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { formatPrice } from '../../reusable/utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';
import FormInput from '../../reusable/components/FormInput';
import SubmitButton from '../../reusable/components/SubmitButton';

export const checkoutAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, totalCost, itemCount } = store.getState().cartState;

    const order = {
      name,
      address,
      cartItems,
      numItemsInCart: itemCount,
      chargeTotal: totalCost,
      orderTotal: formatPrice(totalCost),
    };
    try {
      const response = await customFetch.post(
        '/orders',
        { data: order },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'something went wrong placing your order';
      toast.error(errorMessage);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form
      method='POST'
      className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
    >
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput type='text' name='name' label='full name' />
      <FormInput type='text' name='address' label='address' />
      <div className='mt-4'>
        <SubmitButton text='place your order' />
      </div>
    </Form>
  );
};
export default CheckoutForm;
