import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import Square from './Square';
import { boardReducer, renderBoard, fillWithMines, calculateNeigbour } from './utils/helper';
import actionTypes from './utils/actionTypes';

const GameBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 420px;
  width: 420px;
  background-color: #020202;
`;

const GameDisplay = styled.div`
  height: 100px;
  width: 420px;
  color: #020202;
  text-transform: uppercase;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-weight: bolder;
`;

const Board = () => {
  const [boardData, setBoard] = useState();
  const [{ gameOver, safeSquaresCount }, dispatch] = useReducer(boardReducer, {
    gameOver: false,
    safeSquaresCount: 95,
  });

  useEffect(() => {
    handleRestart();
  }, []);

  const handleRestart = () => {
    const board = renderBoard();
    const boardWithMines = fillWithMines(5, board);
    const boardWithMinesAndNeighbours = calculateNeigbour(boardWithMines);

    setBoard(boardWithMinesAndNeighbours);
    dispatch({ type: actionTypes.RESET_BOARD });
  };

  return (
    <div>
      <GameDisplay>
        <div>Mines Count: 5</div>
        <div>Safe Squares remaining: {safeSquaresCount}</div>
        {gameOver ? <button onClick={() => handleRestart()}>Restart</button> : null}
      </GameDisplay>
      {!gameOver ? (
        <>
          <GameBoard>
            {!!boardData
              ? boardData.map((squareData) => {
                  return (
                    <Square key={squareData.index} squareData={squareData} dispatch={dispatch} />
                  );
                })
              : null}
          </GameBoard>
        </>
      ) : null}
    </div>
  );
};

export default Board;
