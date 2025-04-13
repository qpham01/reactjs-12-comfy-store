import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserAction,
  logoutUserAction,
  toggleThemeAction,
} from './userActions';

const getTheme = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.querySelector('html').setAttribute('data-theme', theme);
  return theme;
};

const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUser(),
  theme: getTheme(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: loginUserAction,
    logoutUser: logoutUserAction,
    toggleTheme: toggleThemeAction,
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
