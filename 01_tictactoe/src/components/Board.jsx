import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisxNext] = useState(false);

  //console.log(board);
  const handleonCLick = position => {
    // if (board[position]) {
    //   return;
    // }
    setBoard(
      5 /*prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    }*/
    );
    //setisxNext(prev => !prev);
  };
  const renderSquare = position => {
    return (
      <Square value={board[position]} onClick={() => handleonCLick(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
