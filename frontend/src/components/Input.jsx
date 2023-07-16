const Input = ({
  type,
  placeholder,
  name,
  minLength = null,
  maxLength = null,
  autoComplete = null,
  placeInput,
  inputValue,
  errorMessage,
  handleChange,
}) => (
  <label className={`${placeInput}__field`}>
    <input
      type={type}
      placeholder={placeholder}
      className={`${placeInput}__input ${errorMessage && `${placeInput}__input_type_error`}`}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      autoComplete={autoComplete ?? `new-${name}`}
      required
      value={inputValue ?? ''}
      onChange={handleChange}
    />
    <span
      className={`${placeInput}__input-error`}
    >
      {errorMessage}
    </span>
  </label>
);
export default Input;
