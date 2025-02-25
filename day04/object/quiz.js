const movie = [
  { type: "액션영화", price: 10000 },
  { type: "로맨틱 코미디", price: 8000 },
  { type: "공포영화", price: 9000 },
];

const age = +prompt("나이 입력");
const selectMovie = +prompt("영화 선택(1~3)") - 1;

if (age < 13) {
  console.log(
    `선택 영화: ${movie[selectMovie].type}, 금액: ${
      movie[selectMovie].price * 0.5
    }`
  );
} else if (60 <= age) {
  console.log(
    `선택 영화: ${movie[selectMovie].type}, 금액: ${
      movie[selectMovie].price * 0.7
    }`
  );
} else {
  console.log(
    `선택 영화: ${movie[selectMovie].type}, 금액: ${
      movie[selectMovie].price * 1
    }`
  );
}
