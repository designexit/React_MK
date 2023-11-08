import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "antd";


const Main = () => {
  //useNavigate라는 hooks를 사용해서 페이징하기
  const navigate = useNavigate();


  return (
    <div>
      <h1>Main 화면입니다.</h1>
      <Button title="회원가입 이동" onClick={navigate("/join")}></Button>
    </div>
  );
};

export default Main;