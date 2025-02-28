// makeFood라는 함수를 만들고
// 요리준비!
// 요리함수
// 요리끝!

const makeFood = (recipe) => {
  console.log("요리 준비!");
  recipe();
  console.log("요리끝!");
};

// makeTaco
// 1. 또띠아 준비
// 2. 야채넣기
// 3. 고기넣기
// 4. 말기
const makeTaco = (x) => {
  console.log("1. 또띠아 준비");
  console.log("2. 야채 넣기");
  console.log(`3. ${x} 넣기`);
  console.log("4. 말기");
};

// makeRamen
// 1. 물끓이기
// 2. 스프넣기
// 3. 면넣기
// 4. 계란 넣기'
const makeRamen = () => {
  console.log("1. 물끓이기");
  console.log("2. 스프 넣기");
  console.log("3. 면 넣기");
  console.log("4. 계란 넣기");
};

const makeKimchiRice = () => {
  console.log("1. 밥 볶기");
  console.log("2. 김치 넣기");
  console.log("3. 참기름");
  console.log("4. 섞기");
};

// 익명함수(일회성)
makeFood(() => {
  makeTaco("🥑");
  makeTaco("🥠");
});

makeFood(makeTaco);
makeFood(makeRamen);
