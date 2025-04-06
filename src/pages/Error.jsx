import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className='text-center'>
        <img src={img} alt='not found' className='mx-auto' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>Back Home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
};
export default ErrorPage;
