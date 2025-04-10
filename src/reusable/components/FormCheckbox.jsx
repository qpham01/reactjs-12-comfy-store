const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className='form-control items-center'>
      <div className='grid gap-y-1 place-items-center'>
        <label htmlFor={name} className='label cursor-pointer capitalize'>
          <span className='label-text capitalize'>{label}</span>
        </label>
        <input
          type='checkbox'
          name={name}
          defaultChecked={defaultValue}
          className={`checkbox checkbox-primary ${size}`}
        />
      </div>
    </div>
  );
};
export default FormCheckbox;
