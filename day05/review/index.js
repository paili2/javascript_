// 1. 홀수 또는 짝수 알려주는 함수 만들기
const isOdd = +prompt("숫자 입력");
console.log(`${isOdd % 2 ? "홀수" : "짝수"}`);

// 2. icecream or coffee를 입력 받으면 "디저트" 돌려주고 아니면 "음식" 돌려주는 함수 만들기
const select_food = prompt("좋아하는 음식 입력");

if (select_food == "아이스크림" || "커피") {
  console.log(`디저트`);
} else {
  console.log(`음식`);
}

// 3. 사용자로부터 영화 종류와 팝콘 종류 입력 받고 구매한 영화, 팝콘 이름 그리고 총 계산 출력 프로그램
const movie = [
  { type: "액션영화", price: 10000 },
  { type: "로맨틱 코미디", price: 8000 },
  { type: "공포영화", price: 9000 },
];

const popcorn = [
  { type: "치즈 팝콘", price: 6000 },
  { type: "카라멜 팝콘", price: 5000 },
  { type: "일반 팝콘", price: 5000 },
];

const select_movie =
  +prompt(
    "1. 액션영화, 10,000원 / 2. 로맨틱 코미디, 8000원 / 3. 공포 영화, 9000원"
  ) - 1;

const select_popcorn =
  +prompt(
    "1. 치즈 팝콘, 6000원 / 2. 카라멜 팝콘, 5000원 / 3. 일반 팝콘, 5000원"
  ) - 1;

console.log(
  `선택 영화는 ${movie[select_movie].type}, 팝콘은 ${
    popcorn[select_popcorn].type
  }이고 총 가격은 ${
    movie[select_movie].price + popcorn[select_popcorn].price
  }원 입니다.
  `
);

// 4. 유저에게 태어난 년도를 물어보고, 띠를 알려주는 함수 만들기
//  2000 -> 용띠, 2001 -> 뱀띠, 1994 -> 개띠

const birth = +prompt("몇년생?");
function zodiac(birth) {
  const animal = [
    "원숭이띠",
    "닭띠",
    "개띠",
    "돼지띠",
    "쥐띠",
    "소띠",
    "호랑이띠",
    "토끼띠",
    "용띠",
    "뱀띠",
    "말띠",
    "양띠",
  ];
  return animal[year % 12];
}

// 5. 유저에게 mbti 묻기
// 1) e 또는 i ?
// 2) s 또는 n ?
// 3) t 또는 f ?
// 4) j 또는 p ?
// ex) i,n,t,p
// 콘솔로 당신의 성격은 내향적이고 직관적이며 이성적이며 즉흥적입니다

const user_mbti1 = prompt("e 또는 i ?");
const user_mbti2 = prompt("s 또는 n ?");
const user_mbti3 = prompt("t 또는 f ?");
const user_mbti4 = prompt("j 또는 p ?");

console.log(
  `당신의 성격은 ${user_mbti1 == "e" ? "외향적" : "내향적"}이고 ${
    user_mbti2 == "s" ? "감각적" : "직관적"
  }이고 ${user_mbti3 == "t" ? "이성적" : "감성성적"}이며 ${
    user_mbti4 == "j" ? "계획적" : "즉흥적"
  }입니다`
);
