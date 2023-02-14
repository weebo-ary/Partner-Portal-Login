import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  message: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.success = true;
    },
    logout(state) {
      state.user = null;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state) {
      state.message = null;
    }
  }
});

export const { login, logout, setMessage, clearMessage } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
