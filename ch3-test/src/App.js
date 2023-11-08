import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import ClassComponent from './component/ClassComponent';
import FuncComponent from './component/FuncComponent';
import MyComp from './component/MyComp';
import './css/style.css';
import Count from './component/Count';
import MyCount from './component/MyCount';
import MySay from './component/MySay';

function App() {
  return (
    <div>
      {/* <ClassComponent /> */}
      {/* <FuncComponent /> */}
      {/* 자식 컴포넌트에게 props라는 속성 객체를 이용해서 이름 전달 */}
      {/* <MyComp name = "김민경" password = "1234"/> */}

      {/* 부모 컴포넌트에서 props 설정이 없을 때, 기본값 사용하기 */}
      {/* <MyComp /> */}

      {/* 자식 컴포넌트에게 child 라는 속성으로 전달하기.  */}
      {/* <MyComp name="김민경" password="1234567">김민경 어린이</MyComp> */}

      <Count/>
      <MyCount/>
      <MySay/>
    


    </div>
    
  );
}

export default App;
