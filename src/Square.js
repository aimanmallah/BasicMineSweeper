import React, { useState } from 'react';
import styled from 'styled-components';

import actionTypes from './utils/actionTypes';

const GameSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid green;
  color: white;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-weight: bolder;
  &:hover {
    background-color: #16db65;
  }
`;

const Square = ({ squareData, dispatch }) => {
  const { isMine, isNeighbour } = squareData;
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (isMine) {
      dispatch({ type: actionTypes.SQUARE_CLICKED_IS_MINE });
    } else {
      if (isVisible === false) {
        dispatch({ type: actionTypes.SQUARE_CLICKED_IS_NOT_VISIBLE });
        setIsVisible(true);
      }
    }
  };

  return (
    <div>
      <GameSquare onClick={handleClick}>{isVisible ? isNeighbour : ''}</GameSquare>
    </div>
  );
};

export default Square;
