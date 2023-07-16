import { useCallback, useState } from 'react';

const useFormValidator = (initialValues = {}) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errorMessages, setErrorMessages] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    setErrorMessages({
      ...errorMessages,
      [name]: event.target.validationMessage,
    });
    setIsValid(event.target.closest('.form').checkValidity());
  };

  const resetForm = useCallback(() => {
    setInputValues({});
    setErrorMessages({});
    setIsValid(false);
  }, []);

  return {
    inputValues,
    errorMessages,
    isValid,
    handleChange,
    resetForm,
    setInputValues,
  };
};

export default useFormValidator;
