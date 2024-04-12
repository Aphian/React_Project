// export 키워드 사용으로 이 파일 외부에서 이 기능에 엑세스를 허용.
// default 키워드 사용하는 다른 파일에 이것이 파일의 주요 기능임을 알림.
export default function Square() {

  // button 반환
  // return 뒤에 오는 모든 항목이 함수 호출자에게 값으로 반환됨
  return <button className="square">X</button>;
}
