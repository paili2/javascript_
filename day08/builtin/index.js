// 컴퓨터: 휴지통, 내 PC, 계산기
// 아이폰: 설정, ...
// built-in Object:
// Number, String, Boolean, Array, Object, Date, Set

const a = new Date();

const b = new Set(); // 중복 허용 안됨

// 배열에서 중복제거 로직
const c = [...new Set(["아아", "라떼", "민트", "라떼"])];
console.log(c);
