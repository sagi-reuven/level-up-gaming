const Input = ({ required, name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="fw-bold text-white">
        {required && <span className="text-danger">*</span>} {label}
      </label>
      <span className="input-box">
        <input {...rest} className="form-control" name={name} />
      </span>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
