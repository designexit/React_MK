import React from 'react';
import PropTypes from "prop-types"


//자식 컴포넌트
//부모 컴포넌트로 부터 전달받은 props라는 속성을 이용하는 입장
//const MyComp = (props) => {
const MyComp = ({name, password, children}) => {
  //const {name, password, children} = props;
  return (
    <div>
      <h1>테스트 props 객체 안에 속성들 중에서 name만 받아오기 : {name}</h1>
      <h1>테스트 props 객체 안에 속성들 중에서 password만 받아오기 : {password}</h1>
      <h1 className='fontStyle'>테스트 props 객체 안에 속성들 중에서 children만 받아오기 : {children}</h1>
    </div>
  );
};

// 타입의 기본값 정하기.
MyComp.defaultProps = {
  name: "기본 이름",
  password: " 기본 1234",
};

//props 타입확인
MyComp.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
};


export default MyComp;