import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Remember: false,
  userDetails: {},
 
};
export const Login = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setRemember: (state, { payload }) => {
      state.Remember = payload;
    },
    setUserDetails: (state, { payload }) => {
     
      state.userDetails = payload;
    },
      }
});
export const { setRemember, setUserDetails } = Login.actions;

export default Login.reducer;
