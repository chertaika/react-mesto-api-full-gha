import { useEffect } from 'react';
import success from '../assets/images/success.svg';
import failure from '../assets/images/failure.svg';

const InfoTooltip = ({ onClose, tooltipMessage }) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (tooltipMessage) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [tooltipMessage]);

  return (
    <div
      className={`popup popup_type_info ${tooltipMessage && 'popup_opened'}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <img
          className="popup__info-image"
          src={tooltipMessage?.isSuccess ? success : failure}
          alt="успешная регистрация"
        />
        <h2 className="popup__title popup__title_type_info">
          {tooltipMessage?.text}
        </h2>
        <button
          className="popup__close-btn btn-hover"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default InfoTooltip;
