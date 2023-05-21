// board indexes
// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

const rowsToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
export const checkIsDraw = (board) => {
  if (board.every((el) => el)) {
    return true;
  }
  return false;
};

export const checkHasWon = (board) => {
  let hasWon = false;
  rowsToCheck.forEach((el) => {
    const first = board[el[0]];
    const second = board[el[1]];
    const third = board[el[2]];
    if (!first || !second || !third) {
      return;
    }

    const allEqual = first === second && third === first;
    if (allEqual) {
      hasWon = true;
    }

    return hasWon;
  });

  return hasWon;
};
