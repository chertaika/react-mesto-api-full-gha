import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import Preloader from './Preloader';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithConfirmation from './PopupWithConfirmation';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import auth from '../utils/Auth';
import InfoTooltip from './InfoTooltip';
import PageNotFound from './PageNotFound';

const App = () => {
  // анимация загрузки
  const [isLoading, setIsLoading] = useState(true);
  // состояние попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // состояние кнопок попапов
  const [buttonEditPopup, setButtonEditPopup] = useState({ buttonText: 'Сохранить', block: false });
  const [buttonAddPopup, setButtonAddPopup] = useState({ buttonText: 'Создать', block: false });
  const [buttonConfirmPopup, setButtonConfirmPopup] = useState({ buttonText: 'Да', block: false });
  const [buttonLogin, setButtonLogin] = useState({ buttonText: 'Войти', block: false });
  const [buttonRegister, setButtonRegister] = useState({ buttonText: 'Зарегистрироваться', block: false });
  // текущая карточка
  const [selectedCard, setSelectedCard] = useState(null);
  // данные удаляемой карточки
  const [deletedCardId, setDeletedCardId] = useState(null);
  // состояние регистрации
  const [tooltipMessage, setTooltipMessage] = useState(null);
  // состояние авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // e-mail пользователя
  const [userEmail, setUserEmail] = useState(null);
  // данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  // данные для карточек
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const handleCardClick = useCallback((card) => {
    setSelectedCard(card);
  }, []);

  const handleEditAvatarClick = useCallback(() => {
    setIsEditAvatarPopupOpen(true);
  }, []);

  const handleEditProfileClick = useCallback(() => {
    setIsEditProfilePopupOpen(true);
  }, []);

  const handleAddPlaceClick = useCallback(() => {
    setIsAddPlacePopupOpen(true);
  }, []);

  const handleCardDelete = useCallback((card) => {
    setDeletedCardId(card);
  }, []);

  const closeAllPopups = useCallback(() => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
    setDeletedCardId(null);
    setTooltipMessage(null);
  }, []);

  const handleCardLike = async (currentCardId, isLiked) => {
    try {
      const likedCard = await api.handleLike(currentCardId, isLiked);
      setCards(cards.map(card => (card._id === currentCardId ? likedCard : card)));
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    }
  };

  const handleConfirmationOfDelete = async () => {
    try {
      setButtonConfirmPopup({ buttonText: 'Удаление...', block: true });
      await api.deleteCard(deletedCardId);
      setCards(cards.filter(card => card._id !== deletedCardId));
      closeAllPopups();
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonConfirmPopup({ buttonText: 'Да', block: false });
    }
  };

  const handleAddPlaceSubmit = async (card) => {
    try {
      setButtonAddPopup({ buttonText: 'Создание...', block: true });
      const userCard = await api.addNewCard(card);
      setCards([...cards, userCard]);
      closeAllPopups();
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonAddPopup({ buttonText: 'Создать', block: false });
    }
  };

  const handleUpdateUser = useCallback(async (data) => {
    try {
      setButtonEditPopup({ buttonText: 'Сохранение...', block: true });
      const userInfo = await api.editUserInfo(data);
      setCurrentUser(userInfo);
      closeAllPopups();
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonEditPopup({ buttonText: 'Сохранить', block: false });
    }
  }, []);

  const handleUpdateAvatar = useCallback(async (data) => {
    try {
      setButtonEditPopup({ buttonText: 'Сохранение...', block: true });
      const userInfo = await api.editUserAvatar(data);
      setCurrentUser(userInfo);
      closeAllPopups();
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonEditPopup({ buttonText: 'Сохранить', block: false });
    }
  }, []);

  const handleRegistration = useCallback(async (data) => {
    try {
      setButtonRegister({ buttonText: 'Регистрация...', block: true });
      await auth.registration(data);
      setTooltipMessage({
        isSuccess: true,
        text: 'Вы успешно зарегистрировались!',
      });
      navigate('/sign-in', { replace: true });
    } catch (error) {
      setTooltipMessage({
        isSuccess: false,
        text: 'Что-то пошло не так! Попробуйте еще раз',
      });
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonRegister({ buttonText: 'Зарегистрироваться', block: false });
    }
  }, []);

  const handleAuthorization = useCallback(async (data) => {
    try {
      setButtonLogin({ buttonText: 'Вход...', block: true });
      await auth.authorization(data);
      setIsLoading(true);
      setIsLoggedIn(true);
    } catch (error) {
      if (error === 401) {
        setTooltipMessage({
          isSuccess: false,
          text: 'Неверный адрес электронной почты или пароль',
        });
      } else {
        setTooltipMessage({
          isSuccess: false,
          text: 'Что-то пошло не так! Попробуйте еще раз',
        });
      }
      setIsLoading(false);
      console.log(`Ошибка: ${error}`);
    } finally {
      setButtonLogin({ buttonText: 'Войти', block: false });
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.logout();
      setIsLoggedIn(false);
      navigate('/sign-in', { replace: true });
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { email } = await auth.checkTokenValidity();
        setUserEmail(email);
        setIsLoggedIn(true);
        navigate('/', { replace: true });
      } catch (error) {
        setIsLoading(false);
        if (error === 401) {
          console.log(`Ошибка: ${error} Необходима авторизация`);
          return;
        }
        console.log(`Ошибка: ${error}`);
      }
    })();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const [userData, initialCards] = await Promise.all([
            api.getUserInfo(),
            api.getInitialCards(),
          ]);
          setCurrentUser(userData);
          setCards(initialCards);
        } catch (error) {
          console.log(`Ошибка: ${error}`);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        {isLoading && <Preloader size="large" />}
        <Header userEmail={userEmail} onSignOut={handleSignOut} />
        <Routes>
          <Route
            path="/"
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            )}
          />
          <Route
            path="/sign-up"
            element={<Register onRegister={handleRegistration} buttonState={buttonRegister} />}
          />
          <Route
            path="/sign-in"
            element={<Login onLogin={handleAuthorization} buttonState={buttonLogin} />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonState={buttonEditPopup}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonState={buttonEditPopup}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonState={buttonAddPopup}
        />

        <PopupWithConfirmation
          isOpen={deletedCardId}
          onClose={closeAllPopups}
          onConfirm={handleConfirmationOfDelete}
          buttonState={buttonConfirmPopup}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <InfoTooltip
          tooltipMessage={tooltipMessage}
          onClose={closeAllPopups}
        />
      </>
    </CurrentUserContext.Provider>
  );
};

export default App;
