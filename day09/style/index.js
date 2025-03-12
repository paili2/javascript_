//const btn = document.createElement("button");
//btn.innerHTML = "네이버";
//btn.style.backgroundColor = "green";
// btn.style.setProperty("backgroundColor", "green");
//document.body.appendChild(btn);

// 1. 유저에게 원하는 버튼 배경색과 글씨색과 내용을 동시에 받고 (띄어쓰기)
// 화면에 버튼을 만들어주기

const user = prompt("원하는 버튼 배경색과 글씨색과 내용 입력 (띄어쓰기)").split(
  " "
);

const btn = document.createElement("button");
btn.style.backgroundColor = user[0];
btn.style.color = user[1];
btn.innerText = user[2];

document.body.appendChild(btn);
