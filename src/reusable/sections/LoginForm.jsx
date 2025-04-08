import { Link, Form } from 'react-router-dom';
import { UserNameInput, FormInput, SubmitButton } from '../components';

const LoginForm = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        method='POST'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          name='identifier'
          label='email'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
        />
        <div className='mt-4 flex'>
          <SubmitButton text='Login' />
        </div>
        <div>
          <button
            className='btn btn-secondary btn-block capitalize'
            type='button'
          >
            guest user
          </button>
        </div>
        <p className='text-center'>
          Don't have an account?{' '}
          <Link
            className='ml-2 link link-hover link-primary capitalize'
            to='/register'
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default LoginForm;
