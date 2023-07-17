const SubmitButton = ({ buttonState: { buttonText, block }, placeSubmitButton, isValid }) => (
  <button
    className={`${placeSubmitButton}__submit-btn ${!isValid && `${placeSubmitButton}__submit-btn_disabled`}`}
    disabled={!isValid || block}
    type="submit"
  >
    {buttonText}
  </button>

);

export default SubmitButton;
