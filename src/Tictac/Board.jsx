import React, { useState} from 'react';
import Square from './Square';




const Board = (index) => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const checkWinner = (squares) => { 
        const lines = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const winner = checkWinner(state);

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;


    const handleClick = (index) => {
        if (winner || state[index]) return;
        const squares = [...state];
        squares[index] = xIsNext ? 'X' : 'O';
        setState(squares);
        setXisNext(!xIsNext);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    };
    
  return (
    <div className='board-container'>
        <h2>{status}</h2>
        {winner ? (
            <> {winner} won the game <button onClick={handleReset}>Play Again</button></>
        ) : (
            <>
            <h4>Player {xIsNext ? "X" : "O"} please move</h4>
        <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]}/>
        <Square onClick={() => handleClick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]}/>
        <Square onClick={() => handleClick(4)} value={state[4]}/>
        <Square onClick={() => handleClick(5)} value={state[5]}/>
        </div>
        <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]}/>
        <Square onClick={() => handleClick(7)} value={state[7]}/>
        <Square onClick={() => handleClick(8)} value={state[8]}/>
        </div>
        </>
        )}
    </div>
  )
}
export default Board;