const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className='form-control'>
      <label className='label my-1' htmlFor={name}>
        <span className='label-text'>{label}</span>
      </label>
      <input
        className='input input-bordered'
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
