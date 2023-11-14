import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components"

// style
const Wrapper = styled.div`
  padding: 40px;
`

const MyMainTest = () => {
  const navigate = useNavigate();




  return (
    <div>
      <h1>Main 화면</h1>
      <div>
        <div><Button title="로그인 이동" onClick={() => navigate("/Login")} type='primary'>로그인</Button></div>
        <div><Button title="회원가입 이동" onClick={() => navigate("/Join")} type='primary'>회원가입</Button></div>
      </div>

      <h1>Hooks Test</h1>
      <div><Button title="Hooks 이동" onClick={() => navigate("/Hooks")} type='primary'>Hooks Use State Test</Button></div>
    </div>
  );
};

export default MyMainTest;