// 일반 함수

function hello(x) {
  return x + " 안녕!";
}

// 화살표(람다) 함수
const hello1 = (x) => {
  return x + " 안녕!";
};

// 화살표 함수
// 1. add(x,y)  // 더하기
const add = (x, y) => {
  return x + y;
};
// 2. oddEven(x)  // 홀짝구분
const oddEven = (x) => {
  return x % 2 ? "홀수" : "짝수";
};
// 3. changeWord(x) // 10글자 이상이면 대문자화, 이하이면 소문자화
const changeWord = (x) => {
  return x.length < 10 ? x.toLowercase() : x.toUpperCase();
};
