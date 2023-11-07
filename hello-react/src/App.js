import logo from './logo.svg';
import './App.css';


function App() {
  // const name = "kmk"
  // return (
  //   <>
  //     <h1>Hello React {name}</h1>
  //     <h2>동작1</h2>
  //     <h2>동작2</h2>
  //   </>
  // );

  // if 대신 jsx에서 조건부 연산자 이용
  // const : 상수처럼 사용, 안드로이드 val
  // let :   변수처럼 사용, 안드로이드 var
  // {조건식 ? (참 실행될 문장) : ( 거짓 실행될 문장)}
  // const name = "김민경1"
  // return(
  //   <div>
  //     {name === "김민경" ? <h1>김민경 맞음</h1> : <h1>김민경 아님</h1>}
  //   </div>
  // );

  //const name = "김민경1"
  // const number = 0
  // // return(
  // //   <div>
  // //     {name === "김민경" && <h1>김민경 맞음</h1>}
  // //   </div>
  // // );
  // return(
  //   <div>
  //     {number && <h1>김민경 맞음</h1>}
  //   </div>
  // );

  //undefined렌더링 안하기
  // 대책 || (or연산자)를 이용함
  // const name = undefined;
  // return name || '값이 undefined입니다'

  //인라인 스타일링 기본
  const name = "Kim Min Kyoung"
  // const style = {
  //   backgroundColor: "#ddd",
  //   color: "yellow",
  //   fontSize: "50px",
  //   };
  //   return <div style={style}>{name}</div>;

  // return (
  //   <div style={{ backgroundColor: "red", color: "yellow", fontSize: "50px" }}>
  //   {name}
  //   <div className="reactTest">김민경</div>
  //   </div>
  //   );


  // 닫아야 하는 태크
  // return(
  //   <div>
  //     <form>
  //     이름 : <br/>
  //     <input></input>
  //     <input/>
  //     </form>
  //   </div>
  // );


  //주석 : 태그내부 - command + /
  return(
    <div>
      {/* <form>
      이름 : <br/>
      <input></input>
      <input/>
      </form> */}
    </div>
  );
  
  
}

export default App;

