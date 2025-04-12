import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';

const RegisterForm = ({ registerAction }) => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        method='POST'
        action={registerAction}
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput
          type='text'
          name='username'
          label='username'
          defaultValue='foo bah1'
        />
        <FormInput
          type='text'
          name='email'
          label='email'
          defaultValue='foo@bah1.com'
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          defaultValue='secret'
        />
        <div className='mt-4'>
          <SubmitButton text='Register' />
        </div>
        <p className='text-center'>
          Already have an account?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default RegisterForm;
