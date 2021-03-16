import actionTypes from './actionTypes';

export const renderBoard = () => {
  let boardData = [];

  for (let i = 0; i < 100; i++) {
    let temp = {
      index: i,
      isMine: false,
      isNeighbour: 0,
      isVisible: false,
    };
    boardData.push(temp);
  }

  return boardData;
};

export const fillWithMines = (n, boardData) => {
  let mineCount = n;

  while (mineCount > 0) {
    let Mine = Math.floor(Math.random() * 100);
    boardData[Mine].isMine = true;
    mineCount--;
  }

  return boardData;
};

export const calculateNeigbour = (boardData) => {
  const neigbours = [-11, -10, -9, -1, 1, 9, 10, 11];

  for (let i = 0; i < boardData.length; i++) {
    let neigboursCount = 0;
    for (let j = 0; j < neigbours.length; j++) {
      if (boardData[i + neigbours[j]] && boardData[i + neigbours[j]].isMine) {
        neigboursCount++;
      }
    }
    boardData[i].isNeighbour = neigboursCount;
  }

  return boardData;
};

export const boardReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SQUARE_CLICKED_IS_MINE:
      return {
        ...state,
        gameOver: true,
      };
    case actionTypes.SQUARE_CLICKED_IS_NOT_VISIBLE:
      return {
        ...state,
        safeSquaresCount: state.safeSquaresCount - 1,
      };
    case actionTypes.RESET_BOARD:
      return {
        gameOver: false,
        safeSquaresCount: 95,
      };
    default:
      return state;
  }
};
