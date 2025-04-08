import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='align-element'>
      <h4 className='font-bold text-4xl'>
        An error occurred: {error.statusText || error.message}
      </h4>
    </div>
  );
};
export default ErrorElement;
