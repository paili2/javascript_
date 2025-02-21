//  1. 프롬프트로 유저에게 10000자리 숫자를 입력받고
// 백의 자리 숫자를 콘솔로 나타내기
//  ex) 58237 -> 2, 88128 -> 1

const num = window.prompt("10000자리 숫자 입력");
const hun = parseInt(((num % 10000) % 1000) / 100);
window.console.log(hun);

// 2. 프롬프트로 유저에게 몇년생 물어보고
// 2006년 이하면 콘솔로 성인입니다! 아니면 미성년자 입니다

const birth = +window.prompt("몇 년생?");
const answer = birth <= 2006 ? "성인입니다!" : "미성년자입니다";

window.console.log(answer);
