// 1. 프롬프트로 당신의 자주 가는 커피점은?
// 2. 프롬프트로 당신의 자주 시키는 커피는?
// 3. 프롬프트로 당신이 자주 시키는 사이즈는?
// 4. 프롬프트로 당신이 좋아하는 원두는?

//  -> 알럿으로 ~~ 커피숍에 ~~사이즈인 ~~커피를 시키고
// 원두를 ~~으로 즐겨 마시는 당신은 커피 애호가!😁

// const shop = window.prompt("당신의 자주 가는 커피점은?");
// const coffee = window.prompt("당신의 자주 시키는 커피는?");
// const size = window.prompt("당신의 자주 시키는 사이즈는?");
// const favorite = window.prompt("당신이 좋아하는 원두는?");

// console.log(`${shop}커피숍에 ${size}사이즈인 ${coffee}커피를 시키고
// 원두를 ${favorite}으로 즐겨 마시는 당신은 커피 애호가!😁`);

// 자기소개 프롬프트

// 1. 당신의 이름은?
// 2. 당신의 전공은?
// 3. 당신의 생년월일은?
// 4. 당신의 MBTI?
// 알럿으로 이름 ~~ 전공 ~~ 생년월일 ~~ MBTI ~~

// 배민 프롬프트
// 1. 주로 시키는 종류는?
// 2. 주로 시키는 프렌차이즈는?
// 3. 주로 시키는 메뉴는?
// 4. 주로 시키는 배달 방식은?
// 5. 주로 걸리는 시간은?
// 알럿으로 ~~종류에서 ~~프렌차이즈 집에서 ~~메뉴를 ~~ 방식으로 ~~시간 걸리시군요!

const name = window.prompt("당신의 이름은?");
const major = window.prompt("당신의 전공은?");
const birth_dt = window.prompt("당신의 생년월일은?");
const mbti = window.prompt("당신의 MBTI?");

window.alert(`이름 ${name} 전공 ${major} 생년월일 ${birth_dt} MBTI ${mbti}`);

const type = window.prompt("주로 시키는 종류는?");
const franchise = window.prompt("주로 시키는 프렌차이즈는?");
const menu = window.prompt("주로 시키는 메뉴는?");
const method = window.prompt("주로 시키는 배달 방식은?");
const time = window.prompt("주로 걸리는 시간은?");

window.alert(
  `${type}종류에서 ${franchise}프렌차이즈 집에서 ${menu}메뉴를 ${method}방식으로 ${time}시간 걸리시군요!`
);
