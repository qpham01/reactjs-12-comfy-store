const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label className='label my-1' htmlFor={name}>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        className={`input input-bordered ${size}`}
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
