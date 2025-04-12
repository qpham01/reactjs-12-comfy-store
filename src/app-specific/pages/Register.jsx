import { RegisterForm } from '../../reusable/sections';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch('/auth/local/register', {
      method: 'POST',
      data,
    });
    toast.success('Account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || 'Something went wrong';
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return <RegisterForm register={registerAction} />;
};
export default Register;
