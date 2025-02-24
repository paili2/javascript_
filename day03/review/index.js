// 1.유저에게 프롬프트로 두 숫자를 입력 받고 두 숫자의 합, 차, 곱, 제곱, 나누기에서 정수화 하는 거 까지 콘솔로 나타내기

const num1 = +window.prompt("첫 번째 숫자 입력ㄱㄱ");
const num2 = +window.prompt("두 번째 숫자 입력ㄱㄱ");

const sum = parseInt(num1 + num2);
const minus = parseInt(num1 - num2);
const subtraction = parseInt(num1 * num2);
const square = parseInt(num1 ** num2);
const divide = parseInt(num1 / num2);

window.console.log(
  `합: ${sum}, 차: ${minus}, 곱:${subtraction}, 제곱:${square}, 나눗셈:${divide}}`
);

// 2. 유저에게 프롬프트로 하나의 숫자를 입력 받고 홀수 또는 짝수인지 콘솔로 알려주기

const num3 = +window.prompt(`숫자 하나 입력하셈`);
const result = num3 % 2 == 0 ? "짝수" : "홀수";
window.console.log(`입력숫자 ${num3}(은)는 ${result}임`);

// 3. 유저에게 프롬프트로 양의 정수를 입력받고 분:초 형태로 나타내기
const num4 = +window.prompt("양의 정수 입력 ㄱㄱ");
const minute = parseInt(num4 / 60);
const second = parseInt(num4 % 60);

window.console.log(`${minute}분 ${second}초`);
