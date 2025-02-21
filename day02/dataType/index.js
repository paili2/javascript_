// 1. 프롬프트로 한 변의 길이를 입력 받고
// 콘솔로 정사각형의 둘레와 넓이 나타내기
// answer) ~~길이는 둘레:~~ 넓이: ~~입니다.

// 2. 프롬프트로 달러를 입력받고 100$
// 콘솔로 원화로 변환된 값으로 나타내기
// answer) ~~달러는 ~~원 입니다.

// 3. 프롬프트로 출생년도를 물어보고 ~~년생 받고
// 콘솔로 해당 출생년도의 나이를 출력하기
// answer) ~~년생은 ~~살 입니다.

const length = window.prompt("한 변의 길이 입력");
const num_length = Number(length);

window.console.log(
  `${num_length}길이는 둘레:${num_length * 4} 넓이: ${
    num_length * num_length
  }입니다.`
);

const dollar = window.prompt("달러 입력");
const parseDollar = parseInt(dallor);

window.console.log(`${dollar}달러는 ${parseDollar * 1432.26}원 입니다.`);

const year = window.prompt("출생년도");
const parsedYear = parseInt(year);

window.console.log(`${parsedYear}년생은 ${2026 - parsedYear}살 입니다.`);

// 프롬프트로 첫번째 숫자 입력
// 프롬프트로 두번째 숫자 입력
// 콘솔로 두수의 합 나타내기

const first_num = +window.prompt("첫 번째 숫자 입력");
const second_num = +window.prompt("두 번째 숫자 입력");

window.console.log(`${first_num} + ${second_num}`);
