// w:300, h:300 box가 있음
// 빨강버튼, 파랑버튼, 노랑버튼
// 각각의 버튼을 누르면 box의 배경색이 해당 버튼의 색깔로 바뀜

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
document.body.appendChild(box);

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

const yellowBtn = document.createElement("button");
yellowBtn.innerText = "옐로버튼";
yellowBtn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});

document.body.appendChild(yellowBtn);
