const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'ffc4fe39-d2b0-4f44-8e6a-cba07e00cdca',
    'Content-Type': 'application/json',
  },
  endpoints: {
    userEndpoint: '/users',
    cardsEndpoint: '/cards',
  },
};

const authSettings = {
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    regEndpoint: '/signup',
    authEndpoint: '/signin',
    tokenEndpoint: '/users/me',
  },
};
const METHOD_PATCH = 'PATCH';
const METHOD_POST = 'POST';
const METHOD_DELETE = 'DELETE';
const METHOD_PUT = 'PUT';

export {
  apiSettings, authSettings, METHOD_PATCH, METHOD_POST, METHOD_DELETE, METHOD_PUT,
};
