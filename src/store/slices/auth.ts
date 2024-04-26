// auth slice from https://dev.to/koladev/django-rest-authentication-cmh
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  token: string | undefined;
};

const initialState: State = {
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state: State, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    logout(state: State) {
      state.token = undefined;
    },
  },
});

export default authSlice;
