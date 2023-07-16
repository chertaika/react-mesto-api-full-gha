import { useCallback } from 'react';
import PopupWithForm from './PopupWithForm';
import useFormValidator from '../hooks/useFormValidator';
import Input from './Input';

const EditAvatarPopup = ({
  isOpen, onClose, onUpdateAvatar, buttonState,
}) => {
  const {
    inputValues, errorMessages, isValid, handleChange, resetForm,
  } = useFormValidator();

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onUpdateAvatar(inputValues);
  }, [inputValues]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonState={buttonState}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      resetForm={resetForm}
    >
      <Input
        type="url"
        placeholder="Ссылка на картинку"
        name="avatar"
        placeInput="popup"
        inputValue={inputValues.avatar}
        errorMessage={errorMessages.avatar}
        handleChange={handleChange}
      />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
