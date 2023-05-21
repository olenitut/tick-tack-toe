import { createSlice } from "@reduxjs/toolkit";
import { checkHasWon, checkIsDraw } from "../../utils/isPlayingHelpers";

// board indexes
// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

const initialBoard = Array(9).fill(null);
const initialState = {
  board: initialBoard,
  steps: [
    {
      id: 0,
      player: null,
      board: initialBoard,
      move: null,
    },
  ],
  isPlaying: true,
  message: null,
  player: "O",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addNewStep(state, action) {
      const squareKey = action.payload;
      if (state.board[squareKey]) {
        state.message = "This square is already taken, choose another one!";
        return;
      }
      const id = state.steps.length;
      state.board = state.board.map((el, i) => {
        if (i === squareKey) {
          el = state.player;
        }
        return el;
      });
      const newStep = {
        id,
        player: state.player,
        board: [...state.board],
        move: squareKey,
      };
      state.steps.push(newStep);
      const isDraw = checkIsDraw(state.board);
      if (isDraw) {
        state.isPlaying = false;
        state.message = `It's a draw! Click the restart button to start another game.`;
        return;
      }

      const hasWon = checkHasWon(state.board);

      if (hasWon) {
        state.isPlaying = false;
        state.message = `Player ${state.player} has won! Click the restart button to start another game.`;
        return;
      }
      state.player = state.player === "O" ? "X" : "O";
      state.message = null;
    },
    // this functionality is redundent but was requred by the task details
    reverseToStep(state, action) {
      const id = action.payload;
      state.steps.splice(id + 1);
      state.board = state.steps[id].board;
      state.message = null;
      state.isPlaying = true;
    },
    restart(state) {
      state.board = initialBoard;
      state.steps = [
        {
          id: 0,
          player: null,
          board: initialBoard,
          move: null,
        },
      ];
      state.isPlaying = true;
      state.message = null;
      state.player = "O";
    },
  },
});

export const { addNewStep, reverseToStep, restart } = gameSlice.actions;
export default gameSlice.reducer;
