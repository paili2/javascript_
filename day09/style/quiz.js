// 유저에게 버튼 만들기 횟수를 물어보고,

// 횟수만큼
// 빨강, 주황, 노랑, 초록, 파랑, 남, 보라 // 내용과 글씨색이 일치
// 빨강, 주황, 노랑, 초록, 파랑, 남, 보라 // 내용과 글씨색이 일치

const user = +prompt("버튼 횟수");
const colorList = [
  { name: "빨강", color: "red" },
  { name: "주황", color: "orange" },
  { name: "노랑", color: "yellow" },
  { name: "초록", color: "green" },
  { name: "파랑", color: "blue" },
  { name: "남", color: "indigo" },
  { name: "보라", color: "purple" },
];

Array(user)
  .fill(0)
  .forEach((i) => {
    colorList.forEach((x) => {
      const btn = document.createElement("button");
      btn.innerText = x.name;
      btn.style.color = x.color;
      document.body.appendChild(btn);
    });
  });
