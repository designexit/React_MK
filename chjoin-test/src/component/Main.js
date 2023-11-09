import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

// 확장팩 -> styled-components : 컴포넌트에서 좀 더 편하게 css 작업하는 모듈
// yarn add styled-components
import styled from "styled-components"


// styled-component 사용 예제
// styled.원하는 태그 선택 (백틱)`` 사이에 문법 작성)
const MainTitleTextCss = styled.p`
  font-size: 30px;
  color: blueviolet;
  font-weight: bold;
  font-style: italic;
`;
const MainTextCss = styled.div`
  font-size: 14px;
  color: chocolate;
`;
 //Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
padding: 20px;
width: calc(100% - 40px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// Container 만들기.
const Container = styled.div`
width: 100%;
max-width: 720px;
margin-left: 20px;

// & : 현재 태그
// div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
// 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
& {
  :not(:last-child) {
    margin-bottom: 16px;
  }
}
`;


const Main = () => {
  //useNavigate라는 hooks를 사용해서 페이징하기
  const navigate = useNavigate();


  return (
    <div>
      <Wrapper>
        <h1>Main 화면입니다.</h1>
        <Container>
          <MainTitleTextCss>
            stlyed components test
            <div>div div div</div>
          </MainTitleTextCss>
          <MainTextCss>
            <p>stlyed components test</p>
            <div>div div div</div>
          </MainTextCss>
          <Button title="회원가입 이동" onClick={() => navigate("/Join")} type='primary'>회원가입 이동</Button><br/>
          <Button title="My count 이동" onClick={() => navigate("/MyCount")} type='primary'>My count 이동</Button>

          <div>
            <Button title="Ref 이동" onClick={() => navigate("/scrollRefTest")} type='primary'>Ref 이동</Button>
          </div>

          <div>
            <Button title="이동" onClick={() => navigate("/listKeyAddDel")} type='primary'>Data list key add del</Button>
          </div>

          <div>
            <Button title="생명주기 컴포넌트" onClick={() => navigate("/ClassLifeCycleTest")} type='primary'>생명주기 컴포넌트</Button>
          </div>

          <div>
            <Button title="UseState" onClick={() => navigate("/hooksUseStateTest")} type='primary'>hooks UseState test</Button>
          </div>
          <div>
            <Button title="UseEffect" onClick={() => navigate("/hooksEffectTest")} type='primary'>hooks UseEffect test</Button>
          </div>
          <div>
            <Button title="Reducer" onClick={() => navigate("/hooksReducerTest")} type='primary'>hooks Reducer test</Button>
          </div>
          <div>
            <Button title="Reducer" onClick={() => navigate("/hooksReducerTest2")} type='primary'>hooks Reducer test2</Button>
          </div>
          <div>
            <Button title="UseMemo" onClick={() => navigate("/UseMemo")} type='primary'>UseMemo</Button>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Main;