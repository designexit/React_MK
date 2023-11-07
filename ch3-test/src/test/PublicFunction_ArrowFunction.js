// setTimeout(() => {
//   console.log("화살표 함수 setTimeOut")
// }, 2000);

// setTimeout(function test() {
//   console.log("일반 함수 setTimeOut")
// },5000);

//차이점
//일반함수, 화살표 함수 가리키는 this 영향권

// 일반함수 this 확인
// function testDog() {
//   this.name = "멍멍이";
//   return {
//     name: "멍멍이2",
//     // 일반 함수로 사용했고, 비교군, 화살표 함수로 확인 할 예정.
//     sound: function () {
//       console.log(this.name + ": 멍멍!!!"); // 멍멍이2: 멍멍!!!
//     },
//   };
// }

// const testdog = new testDog();
// testdog.sound();

// 화살표함수 this 확인
function testDog2() {
  this.name = "멍멍이";
  return {
    name: "멍멍이2",
    // 일반 함수로 사용했고, 비교군, 화살표 함수로 확인 할 예정.
    sound: () => console.log(this.name + ": 멍멍!!!"), // 멍멍이: 멍멍!!!
  };
}

const testdog2 = new testDog2();
testdog2.sound();

// 결론, 화사표함수는 this 의 영향권이 자신이 종속된 인스턴스를 가리킴.