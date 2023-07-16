import { useEffect } from 'react';

const ImagePopup = ({ card, onClose }) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (card) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [card]);

  return (
    <div
      className={`popup popup_type_photo-viewer ${card && 'popup_opened'}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__content">
        <button
          className="popup__close-btn btn-hover"
          onClick={onClose}
          type="button"
          aria-label="Закрыть всплывающее окно"
        />
        <img
          className="popup__image"
          src={card?.link}
          alt={card?.name ?? 'Имя картинки на языке страницы'}
        />
        <h2
          className="popup__image-title"
        >
          {card?.name ?? 'Имя картинки на языке страницы'}
        </h2>
      </div>
    </div>
  );
};

export default ImagePopup;
