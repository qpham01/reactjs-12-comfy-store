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

const initialState = {
  user: { username: 'coding addict' },
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
