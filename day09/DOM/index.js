// 내장 오브젝트: arr, obj, date, window, ...
// js: 브라우저를 조작하는 언어
// document: html을 관여하는 타입
// element(tag) 타입
// const div = document.createElement("div");
// div.innerText = "<button>짱짱버튼</button>";
// div.innerHTML = "<button>짱짱버튼</button>";
// document.body.appendChild(div);

// ---------------------------------------------
// 유저에게 만들고 싶은 태그 물어보고,
// 유저에게 안에 넣고 싶은 내용 물어보고,
// html에 유저가 원하는대로 태그 만들기

// const user_tag = prompt("무슨 태그 만들고 싶어?");
// const user_contents = prompt("태그 안에 무슨 내용 넣을까?");

// const tag = document.createElement(user_tag);
// tag.innerText = user_contents;

// document.body.appendChild(tag);

// ---------------------------------------------
// 순회(정찰)
//[1, 3, 5, 7, 9].forEach((x) => {
//  console.log(x);
//});

// ---------------------------------------------

// 유저에게 원하는 버튼 개수를 물어보고, 버튼 안의 내용도 물어보고 개수만큼 버튼 만들기!

const btn_count = +prompt("버튼 몇 개?");
const btn_text = prompt("내용은?");

const makeBtn = (btn_text) => {
  const btn = document.createElement("button");
  btn.innerText = btn_text;
  document.body.appendChild(btn);
};

Array(btn_count)
  .fill(0)
  .forEach((x) => makeBtn(btn_text));
