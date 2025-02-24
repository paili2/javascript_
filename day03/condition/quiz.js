// 유저에게 월(month)을 입력 받고
// 3,4,5를 입력 받으면 봄!
// 6,7,8를 입력 받으면 여름!
// 9,10,11를 입력 받으면 가을!
// 12,1,2를 입력 받으면 겨울!
// 그 외는 그런 계절 없어요😥!

const month = +window.prompt("월 입력 ㄱㄱ");
if (3 <= month && month <= 5) {
  window.console.log("봄!");
} else if (6 <= month && month <= 8) {
  window.console.log("여름!");
} else if (9 <= month && month <= 11) {
  window.console.log("가을!");
} else if (month == 12 || month == 1 || month == 2) {
  window.console.log("겨울!");
} else {
  window.console.log("그런 계절 없어요😥!");
}

// 유저에게 나이를 입력 받고
// 7살 이하면 유치원생!
// 8~13이면 초등학생!
// 14~19이면 중고등학생!
// 그 외는 성인!

const age = +window.prompt("님 몇살?");
if (0 <= age && age <= 7) {
  window.console.log("유치원생 ㅎㅇ");
} else if (8 <= age && age <= 13) {
  window.console.log("초딩 ㅎㅇ");
} else if (14 <= age && age <= 19) {
  window.console.log("중고딩 ㅎㅇ");
} else {
  window.console.log("성인");
}

// 유저에게 숫자를 입력 받고
// 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0

const num = +window.prompt("숫자 입력");

if (0 < num) {
  window.console.log(`${num % 2 ? "양의 홀수" : "양의 짝수"}`);
} else if (0 > num) {
  window.console.log(`${num % 2 ? "음의 홀수" : "음의 짝수"}`);
} else {
  window.console.log(`0`);
}
