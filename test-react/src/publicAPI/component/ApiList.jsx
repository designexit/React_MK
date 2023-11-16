import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// css
const ApiListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`



const ApiList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [datatype, setDatatype] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        // 카테고리별로, url 주소 변경하기.
        const query = category === 'all' ? '' : `&category=${category}`;

        switch(query){
          case "&category=busanFood":
            const response3 = await axios.get(
              `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`
            );
            setArticles(response3.data.getFoodKr.item);
            // 상태변수, 타입 지정.
            setDatatype(1);
            break;
          case "&category=busanWalking":
            // 부산도보여행 API 주소, busanWalking
            const response4 = await axios.get(
              `https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json`
            );
            setArticles(response4.data.getWalkingKr.item);
            // 상태변수, 타입 지정.
            setDatatype(2);
            break;
          default:
            alert("카테고리를 선택해주세요.");

        }

       

        //console.log(response.data)
        // 해당 주소를 입력해서, 모델링 조사할 때, 이미 구조를 다 봤음.
        // setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();
  }, [category]);

  if (loading){
    return<ApiListCss>데이터 받는중(대기중 ....)</ApiListCss>
  }
  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return null;
  }



  return <div></div>;
};

export default ApiList;
