import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    //action
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
