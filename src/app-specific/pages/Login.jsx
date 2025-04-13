import { useDispatch } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginForm } from '../../reusable/sections';
import { loginUser } from '../features/user/userSlice';
import { customFetch } from '../utils';

export const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch('/auth/local', {
        method: 'POST',
        data,
      });
      store.dispatch(loginUser(response.data));
      // Use redirects only in actions and loaders
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || 'Something went wrong';
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestLogin = async () => {
    const data = {
      identifier: 'test@test.com',
      password: 'secret',
    };
    try {
      const response = await customFetch('/auth/local', {
        method: 'POST',
        data,
      });
      dispatch(loginUser(response.data));
      // Use navigate when not in actions and loaders
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again later');
    }
  };
  return <LoginForm guestLogin={guestLogin} />;
};
export default Login;
