// utils/auth.js

let token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a';

export const getToken = () => {
  return localStorage.getItem('accessToken') || token;
};

export const setToken = (newToken) => {
  localStorage.setItem('accessToken', newToken);
  token = newToken;
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
  token = null;
};
