const obj1 = { a: 1, b: 2, c: 3 };
const nextObj1 = { ...obj1, d: 4 };
for (const key in nextObj1) {
  console.log("복사본의 값: " + nextObj1[key]);
}
// ... spread 연산자를 이용해서, 사본 만들기.
// 복사본을 만들어서 d값만 덮어쓰기.

console.log("==============================");

// 배열
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: true },
];

// 내장함수, concat, filter, map 소개.
let nextArr = array.concat({ id: 4, value: false });

// filter , (item) => item.id !== 2 . 2값 제거
// 배열에서 각 요소를 하나씩 꺼내서 item에 담아서 확인.
let nextArr2 = nextArr.filter((item) => item.id !== 2);

// filter ( 콜백함수의 조건식을 만족하는 요소를 꺼내서 새로운 배열을 만든다. )
// 새로운 배열의 기존 배열의 길이와 똑같거나, 또는 작을수 있음.

// 예) id = 1 !== 2 : true, {id : 1, ~ } : true, 필터 가지고옴.
// id = 2 !== 2 : false, {id : 2, ~ } : false, 필터 안 가지고옴.(제외.)
// id = 3 !== 2 : true, {id : 3, ~ } : true, 필터 가지고옴.
// id = 4 !== 2 : true, {id : 4, ~ } : true, 필터 가지고옴.
// nextArr2 =
// [
// { id: 1, value: true },
// { id: 3, value: true },
// { id: 4, value: true },
// ];


//map item.id === 1 -> 이면 value 값 false 값 변경.
// 배열에서 각 요소를 하나씩 꺼내서 item에 담아서 확인
let nextArr3 = nextArr.map((item) =>
  item.id === 1 ? { ...item, value: false } : item
);

// 출력 걸어두기.
for (let i = 0; i < nextArr.length; i++) {
  console.log(
    "concat 확인. nextArr: " +
      nextArr[i] +
      "key: " +
      nextArr[i].id +
      " , value: " +
      nextArr[i].value
  );
}
console.log("==============================");

// 출력 걸어두기.
for (let i = 0; i < nextArr2.length; i++) {
  console.log(
    "filter 확인. nextArr2: " +
      nextArr2[i] +
      "key: " +
      nextArr2[i].id +
      " , value: " +
      nextArr2[i].value
  );
}

console.log("==============================");
// 출력 걸어두기2
for (let i = 0; i < nextArr3.length; i++) {
  console.log(
    "map 확인. nextArr3: " +
      nextArr3[i] +
      "key: " +
      nextArr3[i].id +
      " , value: " +
      nextArr3[i].value
  );
}