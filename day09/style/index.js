//const btn = document.createElement("button");
//btn.innerHTML = "네이버";
//btn.style.backgroundColor = "green";
// btn.style.setProperty("backgroundColor", "green");
//document.body.appendChild(btn);

// 1. 유저에게 원하는 버튼 배경색과 글씨색과 내용 을 동시에 받고 (띄어쓰기)
// 화면에 버튼을 만들어주기

const user_pick = prompt("버튼 배경색, 글씨색, 내용 입력(띄어쓰기)");

const btn = document.createElement("button");
btn.style.backgroundColor = user_pick.split(" ")[0];
btn.style.color = user_pick.split(" ")[1];
btn.innerText = user_pick.split(" ")[2];

document.body.appendChild(btn);
