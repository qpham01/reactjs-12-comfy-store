import { redirect, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

import { OrderList, DotsPaginationContainer } from '../sections';
import { SectionTitle } from '../../reusable/components';

const ordersQuery = (params, user) => {
  const config = {
    params,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    timeout: 10000,
  };
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () => customFetch.get('/orders', config),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn('please login to view orders');
      return redirect('/login');
    }
    const searchParams = new URL(request.url).searchParams;
    const entries = [...searchParams.entries()];
    const params = Object.fromEntries(entries);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'something went wrong placing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) {
        return redirect('/login');
      }
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total === 0) {
    return <SectionTitle title='No orders found' />;
  }
  return (
    <>
      <SectionTitle title='Your Orders' />
      <DotsPaginationContainer />
      <OrderList />
    </>
  );
};
export default Orders;
