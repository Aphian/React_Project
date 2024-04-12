// export 키워드 사용으로 이 파일 외부에서 이 기능에 엑세스를 허용.
// default 키워드 사용하는 다른 파일에 이것이 파일의 주요 기능임을 알림.

// 보드 안에 숫자 넣기
function Square() {
  return <button className="square">1</button>;
}

// value의 값을 넣기
// JS 로 렌더링 필요
function Square({value}) {
  return <button className="square">{value}</button>;
}

export default function Board() {

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

  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  )

}
