import { useContext, useState } from 'react';
import Preloader from './Preloader';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Card = ({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const { _id: userId } = useContext(CurrentUserContext);
  const isOwner = card.owner._id === userId;
  const isLiked = card.likes.some(owner => owner._id === userId);

  const handleCardDelete = () => {
    onCardDelete(card._id);
  };

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleCardLike = () => {
    onCardLike(card._id, isLiked);
  };

  const handleImageError = () => {
    setIsImageError(true);
  };

  const handleImageLoading = () => {
    setIsImageLoading(true);
  };

  return (
    <article className="card">
      <div className="card__photo-container">
        {!isImageLoading && (
          <Preloader size="small" isImageError={isImageError} />
        )}
        <img
          className="card__photo"
          alt={card.name}
          src={card.link}
          onClick={handleCardClick}
          onError={handleImageError}
          onLoad={handleImageLoading}
        />
      </div>
      {isOwner && (
        <button
          className="card__delete-btn btn-hover"
          type="button"
          aria-label="Удалить карточку"
          onClick={handleCardDelete}
        />
      )}
      <div className="card__desc">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            className={`card__like-button ${isLiked && 'card__like-button_active'}`}
            type="button"
            aria-label="Поставить лайк"
            onClick={handleCardLike}
          />
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
