//1. x를 넣으면 x라서 럭키비키잖아~
function luckybiky(x) {
  return `${x}라서 럭키비키잖아`;
}
//2. x를 넣으면 뒤에 😁+x+😁를 돌려주기
function makeSmile(x) {
  return `😁${x}😁`;
}
//3. x를 넣으면 해당 숫자의 두배를 돌려주기
function makeDouble(x) {
  return x * 2;
}

//4. x가 홀수면 두배 돌려주고, 짝수면 세배 돌려주기
function four(x) {
  return x % 2 ? x * 2 : x * 3;
}

//5. x가 3의배수 또는 5의 배수이면 제곱을 돌려주고, 아니면 10 더해서 돌려주기
function five(x) {
  return x % 3 == 0 || x % 5 == 0 ? x ** 2 : x + 10;
}

//6. x,y가 들어오면 x의 y제곱해서 돌려주기
function six(x, y) {
  return x ** y;
}
//7. 배열이 들어오면 첫번째 인덱스에 사탕으로 바꿔주기
function seven(x) {
  x[0] = "candy";
  return x;
}
