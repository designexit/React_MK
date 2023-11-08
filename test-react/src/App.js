//import logo from './logo.svg';
import './App.css';
import PropsTest from './component/PropsTest';
import Main from './component/MyMainTest';
import Join from './component/MyJoin';
import Login from './component/MyLogin';
// import { Button, Space, DatePicker, version } from "antd";
// //페이지 이동을 위한 설정
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Main/>}/>
        <Route path='Join' element = {<Join/>} />
        <Route path='Login' element = {<Login/>} />
      </Routes>
      {/* <div style={{padding:"2rem"}}>
        <h1>React Test</h1>
        <h2 style={{ backgroundColor: "#ccc", display: "inline-block"}}>Form Style</h2>
        <div className="divBox">
          <form>
            <lable>Name</lable>
            <input type="text" placeholder="이름을 입력하세요"></input>
          </form>
        </div>
        
        <div><img src="images/meon.png" style={{width:"200px"}}></img></div>


        
        <PropsTest name="Nova" type="Norwegian forest cat">까칠 츤델</PropsTest>

      </div> */}
    </BrowserRouter>
    
    

    
    


  );
}

export default App;
