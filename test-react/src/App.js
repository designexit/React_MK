//import logo from './logo.svg';
import './App.css';
import PropsTest from './component/PropsTest';

function App() {
  return (
    <div style={{padding:"2rem"}}>
      <h1>React Test</h1>
      <h2 style={{ backgroundColor: "#ccc", display: "inline-block"}}>Form Style</h2>
      <div className="divBox">
        <form>
          <lable>Name</lable>
          <input type="text" placeholder="이름을 입력하세요"></input>
        </form>
      </div>
      {/* <div><img src={ require('./public/meon.png') } /></div> */}
      <div><img src="images/meon.png" style={{width:"200px"}}></img></div>


      {/* props test */}
      <PropsTest name="Nova" type="Norwegian forest cat">까칠 츤델</PropsTest>


    </div>
    

    
    


  );
}

export default App;
