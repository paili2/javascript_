// 1. 유저에게 좋아하는 아이돌 그룹 멤버들을 입력 받고,
// 아이들 멤버의 버튼만큼 화면에 만들기

const like_idol = prompt("좋아하는 아이돌 그룹 멤버 입력 (띄어쓰기)").split(
  " "
);

like_idol.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
});

// 2. 유저에게 좋아하는 색상 5가지 영어로 입력 받고,
// 그 색상을 가진 버튼들을 화면에 만들기기

const like_color = prompt("좋아하는 색 5개, 영어로 입력ㄱㄱ(띄어쓰기)").split(
  " "
);

like_color.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerText = "버튼";
  btn.style.backgroundColor = x;
  document.body.appendChild(btn);
});

// 화면에 태그 만들기
// 1. 원하는 태그 만들기  document, element
// 2. 태그 안에 내용 채우기
// 3. 태그의 스타일 꾸미기
// 4. 태그를 바디에 나타내기기
