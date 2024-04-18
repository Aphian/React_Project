// export 키워드 사용으로 이 파일 외부에서 이 기능에 엑세스를 허용.
// default 키워드 사용하는 다른 파일에 이것이 파일의 주요 기능임을 알림.

// 구성요소 변화 기억을 위한 `상태` 사용
// useState : 컴포넌트에서 호출하여 항목을 `기억`할 수 있는 특수 함수
import { useState } from 'react'
// 보드 안에 숫자 넣기
// function Square() {
  //   return <button className="square">1</button>;
  // }
  
// value의 값을 넣기
// JS 로 렌더링 필요
function Square({ value , onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   // console.log('clicked!');
  //   // 클릭하면 X 로 변경
  //   setValue('X');
  // }
  
  // return <button className="square">{value}</button>;

  return (
    <button className="square" onClick={onSquareClick}>
      { value }
    </button>

  )
}

function Board({ xIsNext, squares, onPlay }) {

  // button 반환
  // return 뒤에 오는 모든 항목이 함수 호출자에게 값으로 반환됨
  // return <button className="square">X</button>;

  // JSX는 여러 개의 인접한 요소가 아닌 단일 요소만 반환해야함.
  // 해결방법 : <> ... </> 사용해야함
  // return <button className="square">X</button><button className="square">X</button>

  // return (
  //   <>
  //     <button className="square">X</button>
  //     <button className="square">X</button>
  //   </>
  // );

  // 직접적인 값을 넣은 보드
  // return (
  //   <>
  //     <div className="board-row">
  //       <button className="square">1</button>
  //       <button className="square">2</button>
  //       <button className="square">3</button>
  //     </div>
  //     <div className="board-row">
  //       <button className="square">4</button>
  //       <button className="square">5</button>
  //       <button className="square">6</button>
  //     </div>
  //     <div className="board-row">
  //       <button className="square">7</button>
  //       <button className="square">8</button>
  //       <button className="square">9</button>
  //     </div>
  //   </>
  // ) ;

  // return (
  //   <>
  //     <div className="board-row">
  //       <Square value="1"/>
  //       <Square value="2"/>
  //       <Square value="3"/>
  //     </div>
  //     <div className="board-row">
  //       <Square value="4"/>
  //       <Square value="5"/>
  //       <Square value="6"/>
  //     </div>
  //     <div className="board-row">
  //       <Square value="7"/>
  //       <Square value="8"/>
  //       <Square value="9"/>
  //     </div>
  //   </>
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }

      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "0";
      }

      onPlay(nextSquares);

      // nextSquares[i] = "X";
      // setSquares(nextSquares);
      // setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status  = "Next player: " (xIsNext ? "X" : "0");
    }
    // useState 함수를 사용하기 때문에 value 값 제거
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </>
  )

}

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = ([...history.slice(0, currentMove + 1), nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{ description } </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
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
