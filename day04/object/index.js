// 기본타입: string, number,
// 문자, 정수 - 아무타입 가능

const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
  hasCaffein: true,
  ingredients: ["물", "커피콩"],
};

coffee["price"]; //2500
coffee.price; //2500

// 샷 커피콩
window.console.log(`샷개수: ${coffee.shots} 성분: ${coffee.ingredients[1]}`);

// 자동차를 오브젝트 타입으로 만들기!
// 제작사
// 차이름
// 옵션
// 연식
// 연비

const car = {
  company: "기아",
  name: "레이",
  options: ["투톤 패키지", "컴포트"],
  year: 2025,
  fuel: 19.2,
};

// car.company
// car["company"]
// car.coffee  // undefined

car.people = 4; // people:4 추가
delete car.options; // options 삭제
car.fuel = 20; // fuel: 20
