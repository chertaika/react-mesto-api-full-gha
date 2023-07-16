const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]+\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const SUCCESS_CODE_200 = 200;
const SUCCESS_CODE_201 = 201;
const ERROR_CODE_400 = 400;
const ERROR_CODE_403 = 403;
const ERROR_CODE_404 = 404;
const ERROR_CODE_409 = 409;
const ERROR_CODE_401 = 401;
const ERROR_CODE_500 = 500;
const INCORRECT_USER_DATA_MESSAGE = 'Переданы некорректные данные пользователя';
const INCORRECT_ADD_USER_DATA_MESSAGE = 'Переданы некорректные данные при создании пользователя';
const INCORRECT_UPDATE_USER_DATA_MESSAGE = 'Переданы некорректные данные при обновлении профиля';
const INCORRECT_UPDATE_AVATAR_DATA_MESSAGE = 'Переданы некорректные данные при обновлении аватара';
const INCORRECT_CARD_DATA_MESSAGE = 'Переданы некорректные данные карточки';
const INCORRECT_ADD_CARD_DATA_MESSAGE = 'Переданы некорректные данные при создании карточки';
const INCORRECT_LIKE_CARD_DATA_MESSAGE = 'Переданы некорректные данные для постановки/снятии лайка';
const USER_NOT_FOUND_MESSAGE = 'Пользователь с указанным _id не найден';
const CARD_NOT_FOUND_MESSAGE = 'Карточка с указанным _id не найдена';
const DATA_NOT_FOUND_MESSAGE = 'Данные не найдены';
const EMPTY_NAME_ERROR_MESSAGE = 'Поле "Название" не может быть пустым';
const EMPTY_LINK_ERROR_MESSAGE = 'Поле "Ссылка на картинку" не может быть пустым';
const NOT_UNIQUE_EMAIL_ERROR_MESSAGE = 'Пользователь с таким email уже зарегистрирован';
const INVALID_AUTH_DATA_ERROR_MESSAGE = 'Неправильные почта или пароль';
const UNAUTHORIZED_ERROR_MESSAGE = 'Необходима авторизация';
const NO_RIGHTS_TO_DELETE_ERROR_MESSAGE = 'Нет прав на удаление этой карточки';
const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';
const SUCCESSFUL_DELETE = 'Пост удалён';

module.exports = {
  URL_REGEX,
  SUCCESS_CODE_200,
  SUCCESS_CODE_201,
  ERROR_CODE_400,
  ERROR_CODE_403,
  ERROR_CODE_500,
  ERROR_CODE_404,
  ERROR_CODE_409,
  ERROR_CODE_401,
  INCORRECT_USER_DATA_MESSAGE,
  INCORRECT_ADD_USER_DATA_MESSAGE,
  INCORRECT_UPDATE_USER_DATA_MESSAGE,
  INCORRECT_UPDATE_AVATAR_DATA_MESSAGE,
  INCORRECT_CARD_DATA_MESSAGE,
  INCORRECT_ADD_CARD_DATA_MESSAGE,
  INCORRECT_LIKE_CARD_DATA_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  DATA_NOT_FOUND_MESSAGE,
  EMPTY_NAME_ERROR_MESSAGE,
  EMPTY_LINK_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  SUCCESSFUL_DELETE,
  NOT_UNIQUE_EMAIL_ERROR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
  NO_RIGHTS_TO_DELETE_ERROR_MESSAGE,
};
