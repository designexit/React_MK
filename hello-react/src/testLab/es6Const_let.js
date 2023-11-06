function test (){
  var a = "hello"
  if(true){
    var a = "hi"
    console.log(a);
  }
  console.log(a);
}

function test2(){
  let a = "hello"
  if(true){
    let a = "hi"
    console.log(a);
  }
  console.log(a);
}

test();
test2();
// var는 전역으로 재선언 및 재할당
// let은 블록단위래서 지역변수의 효력 범위를 못 넘어감