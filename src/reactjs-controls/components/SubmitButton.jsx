import { useNavigation } from 'react-router-dom';

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';

  return (
    <button
      className='btn btn-primary btn-block capitalize'
      disabled={isSubmitting}
      type='submit'
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitButton;
