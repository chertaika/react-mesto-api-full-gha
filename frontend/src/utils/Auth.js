import {
  METHOD_POST,
  authSettings,
} from './constants';

class Auth {
  constructor({ baseUrl, headers, endpoints: { regEndpoint, authEndpoint, tokenEndpoint } }) {
    this._address = baseUrl;
    this._headers = headers;
    this._regEndpoint = regEndpoint;
    this._authEndpoint = authEndpoint;
    this._tokenEndpoint = tokenEndpoint;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  async _request(endpoint, header, options) {
    const response = await fetch(`${this._address}${endpoint}`, { headers: header, ...options });
    return this._checkResponse(response);
  }

  registration({ email, password }) {
    return this._request(
      this._regEndpoint,
      this._headers,
      {
        method: METHOD_POST,
        credentials: 'include',
        body: JSON.stringify({
          password,
          email,
        }),
      },
    );
  }

  authorization({ email, password }) {
    return this._request(this._authEndpoint, this._headers, {
      method: METHOD_POST,
      credentials: 'include',
      body: JSON.stringify({ password, email }),
    });
  }

  checkTokenValidity() {
    return this._request(
      this._tokenEndpoint,
      {
        'Content-Type': 'application/json',
      },
      { credentials: 'include' },
    );
  }
}

const auth = new Auth(authSettings);
export default auth;
