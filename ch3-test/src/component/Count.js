//state test 자식 컴포넌트
//클래스형 컴포넌트

import React, { Component } from 'react';

class Count extends Component {
 //props 전달용, Component 부모클래스 초기화 같이 진행.
 constructor(props) {
  super(props);
  //state , 초깃값 설정.
  this.state = {
    number: 0,
    anotherNumber: 0,
  };
}
render() {
  //비구조화 할당
  const { number, anotherNumber } = this.state;
  return (
    <div>
      <h1>{number}</h1>
      <h2>anotherNumber : {anotherNumber}</h2>
      <button
        // onClick 의 값으로 함수를 사용
        onClick={() => {
          this.setState({ number: number + 1 });

          // 값이 2씩 증가 -> 바로 반영이 안됨 
          // this.setState({number : this.state.number + 1});
          // 해결책으로 객체 대신에 함수로 대체
          this.setState((prevState) => {
            return {
              number : prevState.number + 1,
            };

          },
          () => {
            console.log("state값 변경 후 함수 호출")
          }
          );
        }}
      >
        {" "}
        +1{" "}
      </button>
      <button
        // onClick 의 값으로 함수를 사용
        onClick={() => {
          this.setState({ number: number - 1 });
        }}
      >
        {" "}
        -1{" "}
      </button>
    </div>
  );
}
}

export default Count;