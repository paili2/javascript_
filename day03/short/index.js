// 1. 유저에게 닉네임을 입력 받고
// ~~님 환영합니다! 알럿으로
// 대신에 아무것도 입력하지 않으면
// Guest님 환영합니다! 알럿으로

// const nick_name = window.prompt("닉네임 입력 ㄱㄱ");
// window.alert(`${nick_name || "Guest"}님 환영합니다!`); // || => default값 쓸 때 자주 사용

// 2. 유저에게 비밀번호를 입력 받고
// 비밀번호가 1024이면 알럿으로 화장실 열림!
// 틀리면 아무것도 안 일어남

const password = window.prompt("비밀번호 입력 ㄱㄱ");
window.alert(`${[password == 1024 ? "화장실 열림!" : "아무것도 안 일어남"]}`);
