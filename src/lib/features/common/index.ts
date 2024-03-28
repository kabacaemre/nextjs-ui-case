import { createSlice } from "@reduxjs/toolkit";

import { ICommonSlice } from "./ICommonSlice";

const initialState: ICommonSlice.State = {
  theme: "light",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = commonSlice.actions;

export default commonSlice.reducer;
