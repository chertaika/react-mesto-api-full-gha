import { useEffect } from 'react';
import Form from './Form';

const PopupWithForm = ({
  name,
  title,
  buttonState,
  isOpen,
  onClose,
  onSubmit,
  children,
  isValid,
  resetForm,
}) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    if (resetForm) {
      resetForm();
    }
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
        <Form
          name={name}
          buttonState={buttonState}
          onSubmit={onSubmit}
          placeForm="popup"
          isValid={isValid}
        >
          {children}
        </Form>
        <button
          className="popup__close-btn btn-hover"
          onMouseDown={onClose}
          type="button"
          aria-label="Закрыть всплывающее окно"
        />
      </div>
    </div>
  );
};

export default PopupWithForm;
