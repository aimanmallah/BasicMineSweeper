import styled from 'styled-components';

import Board from './Board';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  /* background-color: #04471c; */
`;

function App() {
  return (
    <div>
      <GameContainer>
        <Board />
      </GameContainer>
    </div>
  );
}

export default App;
