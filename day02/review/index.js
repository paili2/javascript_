// 프롬프트로 주말에 할 일과 주말에 먹고싶은 거 입력 받고
// 콘솔로그 주말에 ~~일과 ~~음식을 드셔보세요! 출력

// 프롬프트로 귀하의 나이를 물어보고
// 콘솔로그로 ~~나이는 ~~년생이시군요! 출력

const todo = window.prompt("주말에 할 거");
const food = window.prompt("주말에 먹고싶은 거");

window.console.log(`주말에 ${todo}일과 ${food}음식을 드셔보세요!`);

const age = window.prompt("나이 몇살?");
const birth = Number(age);
window.console.log(`${age}나이는 ${2025 - birth + 1}년생이시군요!`);
