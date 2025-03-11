// 9개의 버튼이 있음

// box 높이와 넓이
// small, medium, large
// wh: 100, wh:200, wh:300

// 배경색상 바꾸기
// red, blue, green

// box 모서리 둥근정도
// square, ellipse, circle
// 0px, 10px, 9999px

const box = document.createElement("div");
document.body.appendChild(box);
// box.style.width = "10px";
// box.style.height = "10px";
// box.style.backgroundColor = "grey";

const smallBtn = document.createElement("button");
smallBtn.innerText = "스몰버튼";
smallBtn.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});
document.body.appendChild(smallBtn);

const mediumBtn = document.createElement("button");
mediumBtn.innerText = "미디움버튼";
mediumBtn.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
document.body.appendChild(mediumBtn);

const largeBtn = document.createElement("button");
largeBtn.innerText = "라지버튼";
largeBtn.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});
document.body.appendChild(largeBtn);

const redBtn = document.createElement("button");
redBtn.innerText = "레드버튼";
redBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
document.body.appendChild(redBtn);

const blueBtn = document.createElement("button");
blueBtn.innerText = "블루버튼";
blueBtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
document.body.appendChild(blueBtn);

const yellBtn = document.createElement("button");
yellBtn.innerText = "옐로버튼";
yellBtn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});
document.body.appendChild(yellBtn);

const squareBtn = document.createElement("button");
squareBtn.innerText = "스퀘어버튼";
squareBtn.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
document.body.appendChild(squareBtn);

const ellipseBtn = document.createElement("button");
ellipseBtn.innerText = "타원형버튼";
ellipseBtn.addEventListener("click", () => {
  box.style.borderRadius = "10px";
});
document.body.appendChild(ellipseBtn);

const circleBtn = document.createElement("button");
circleBtn.innerText = "서클버튼";
circleBtn.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
document.body.appendChild(circleBtn);
