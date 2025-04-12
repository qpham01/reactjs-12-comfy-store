import { toast } from 'react-toastify';

const themes = {
  light: 'light',
  dark: 'dark',
};

export const loginUserAction = (state, payload) => {
  //state.user = payload;
  toast.success('Login successful');
};

export const logoutUserAction = (state) => {
  state.user = null;
  localStorage.removeItem('user');
  // Maybe should also clear local storage
  toast.success('Logout successful');
};

export const toggleThemeAction = (state) => {
  const { light, dark } = themes;
  state.theme = state.theme === dark ? light : dark;
  document.querySelector('html').setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
};
