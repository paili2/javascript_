// 1. x를 넣으면 x라서 럭키비키잖아~
function lucky(x) {
  return x + "라서 럭키비키잖아~";
}

console.log(lucky("함께"));

// 2. x를 넣으면 뒤에 😁+x+😁를 돌려주기
function smile(x) {
  return "😁" + x + "😁";
}

console.log(smile("크킄"));

// 3. x를 넣으면 해당 숫자의 두 배 돌려주기
function multy(x) {
  return x * 2;
}

console.log(multy(3));

// 4. x가 홀수면 두배 돌려주고, 짝수면 세배 돌려주기
function oddEven(x) {
  return x % 2 ? x * 2 : x * 3;
}

console.log(oddEven(2));

// 5. x가 3의 배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10 더해서 돌려주기
function square(x) {
  return x % 3 == 0 || x % 5 == 0 ? x ** 2 : x + 10;
}

console.log(square(20));

// 6. x,y가 들어오면 x의 y제곱해서 돌려주기
function xysquare(x, y) {
  return x ** y;
}
console.log(xysquare(2, 3));

// 7. 배열이 들어오면 첫번째 인덱스에 사탕으로 바꿔주기
const num = ["초콜릿", "빵", "음료수"];

function arraynum(x) {
  return (x[0] = "사탕");
}

console.log(arraynum(num));
