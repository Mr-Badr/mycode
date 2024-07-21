// utils/auth.js

let token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43';

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
