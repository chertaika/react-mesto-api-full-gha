import {
  METHOD_DELETE,
  METHOD_PATCH,
  METHOD_POST,
  METHOD_PUT,
  apiSettings,
} from './constants';

class Api {
  constructor({ baseUrl, headers, endpoints: { userEndpoint, cardsEndpoint } }) {
    this._address = baseUrl;
    this._headers = headers;
    this._userEndpoint = userEndpoint;
    this._cardsEndpoint = cardsEndpoint;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  async _request(endpoint, options) {
    const response = await fetch(`${this._address}${endpoint}`, { headers: this._headers, ...options });
    return this._checkResponse(response);
  }

  getUserInfo() {
    return this._request(`${this._userEndpoint}/me`, { credentials: 'include' });
  }

  getInitialCards() {
    return this._request(this._cardsEndpoint, { credentials: 'include' });
  }

  editUserInfo({ name, about }) {
    return this._request(`${this._userEndpoint}/me`, {
      method: METHOD_PATCH,
      credentials: 'include',
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  editUserAvatar({ avatar }) {
    return this._request(`${this._userEndpoint}/me/avatar`, {
      method: METHOD_PATCH,
      credentials: 'include',
      body: JSON.stringify({
        avatar,
      }),
    });
  }

  addNewCard({ name, link }) {
    return this._request(this._cardsEndpoint, {
      method: METHOD_POST,
      credentials: 'include',
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._cardsEndpoint}/${cardId}`, {
      method: METHOD_DELETE,
      credentials: 'include',
    });
  }

  _addLike(cardId) {
    return this._request(`${this._cardsEndpoint}/${cardId}/likes`, {
      method: METHOD_PUT,
      credentials: 'include',
    });
  }

  _removeLike(cardId) {
    return this._request(`${this._cardsEndpoint}/${cardId}/likes`, {
      method: METHOD_DELETE,
      credentials: 'include',
    });
  }

  handleLike(cardId, isLiked) {
    return isLiked ? this._removeLike(cardId) : this._addLike(cardId);
  }
}

const api = new Api(apiSettings);
export default api;
