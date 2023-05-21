import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: "X",
  reducers: {
    togglePlayer(state) {
      state = state === "X" ? "O" : "X";
      return state;
    },
  },
});

export const { togglePlayer } = playerSlice.actions;
export default playerSlice.reducer;
