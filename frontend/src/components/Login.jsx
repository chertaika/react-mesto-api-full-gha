import { useCallback } from 'react';
import useFormValidator from '../hooks/useFormValidator';
import Form from './Form';
import Input from './Input';

const Login = ({ onLogin, buttonState }) => {
  const {
    inputValues, errorMessages, isValid, handleChange,
  } = useFormValidator();

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onLogin(inputValues);
  }, [inputValues]);

  return (
    <main>
      <section className="authentication">
        <h2 className="authentication__title">Вход</h2>
        <Form
          name="sign-in"
          buttonState={buttonState}
          onSubmit={handleSubmit}
          placeForm="authentication"
          isValid={isValid}
        >
          <Input
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            maxLength="30"
            placeInput="authentication"
            inputValue={inputValues.email}
            errorMessage={errorMessages.email}
            handleChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="8"
            autoComplete="password"
            placeInput="authentication"
            inputValue={inputValues.password}
            errorMessage={errorMessages.password}
            handleChange={handleChange}
          />
        </Form>
      </section>
    </main>
  );
};

export default Login;
