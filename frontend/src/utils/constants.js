const apiSettings = {
  baseUrl: 'https://api.chertaika.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    userEndpoint: '/users',
    cardsEndpoint: '/cards',
  },
};

const authSettings = {
  baseUrl: 'https://api.chertaika.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    regEndpoint: '/signup',
    authEndpoint: '/signin',
    logoutEndpoint: '/logout',
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
