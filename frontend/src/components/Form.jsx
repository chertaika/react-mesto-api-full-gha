import SubmitButton from './SubmitButton';

const Form = ({
  name, buttonState, onSubmit, children, placeForm, isValid,
}) => (
  <form
    className={`form ${placeForm}__form`}
    name={name}
    onSubmit={onSubmit}
    noValidate
  >
    {children}
    <SubmitButton buttonState={buttonState} placeSubmitButton={placeForm} isValid={isValid} />
  </form>
);

export default Form;
