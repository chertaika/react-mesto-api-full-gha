import PopupWithForm from './PopupWithForm';

const PopupWithConfirmation = ({
  isOpen, onClose, onConfirm, buttonState,
}) => {
  const handleConfirm = (evt) => {
    evt.preventDefault();
    onConfirm();
  };

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonState={buttonState}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleConfirm}
      isValid
    />
  );
};

export default PopupWithConfirmation;
