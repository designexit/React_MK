import React from 'react';
import { useState, useRef } from "react";
import { Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";

const MyJoin = () => {
  const navigate = useNavigate ();
  const [Image, setImage] = useState("");
  const [File, setFile] = useState("");
  const fileInput = useRef(null);
  const onChangeImage = (e) => {
    // 선택된 파일이 첫번째 사진.
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      // 취소가 발생했다면,
      // 기본 프로필 베이직 사진.
      setImage(
        "https://pixabay.com/ko/vectors/%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%A6%AC-%EB%A7%A8-973460/"
      );
      return;
    }

    // 선택된 사진을 , 결과뷰에 출력하는 로직.
    const reader = new FileReader();
    reader.onload = () => {
      // reader.readyState
      // 0 : 비어있는 상태
      // 1: 로딩 중
      // 2: 로딩 완료
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    // 파일 데이터를 URL로 읽어오는 함수
    reader.readAsDataURL(e.target.files[0]);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      // email input -> name : email , value : 실제 입력된 값
      // password input -> name : password , value : 실제 입력된 값
      [e.target.name]: e.target.value,
    };
    // 입력된 email, password  업데이트 해주는 함수 : 세터와 동일.
    setForm(nextForm);
  };
  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };



  return (
    <div>
      <h1>회원가입</h1>
      <Avatar
        src={Image}
        size={200}
        onClick={() => fileInput.current.click()}
      />
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profileImg"
        onChange={onChangeImage}
        ref={fileInput}
      />

<h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요."
        value={email}
        // 방법1
        // onChange={onChangeEmail}
        // 방법2
        onChange={onChangeForm}
        //onKeyPress={onKeyPress}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        // 방법1
        // onChange={onChangePassword}
        // 방법2
        onChange={onChangeForm}
        //onKeyPress={onKeyPress}
      />
      {/* <button onClick={onClick}>확인</button> */}
      <p>
        <Button title="로그인 이동" onClick={() => navigate("/Login")} type='primary'>회원가입</Button>
        </p>

    </div>
  );
};

export default MyJoin;