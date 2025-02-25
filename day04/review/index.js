//

const drink = ["americano", "lemonade", "latte"];
const money = [3000, 4000, 3500];

const select = +window.prompt(
  "음료 종류 고르셈(1. 아메리카노(3000) / 2. 레몬에이드(4000) / 3. 카페라떼(3500)"
);

const pay = +window.prompt("돈 넣으셈");

window.console.log(
  `선택 음료: ${drink[select - 1]}, 잔돈: ${pay - money[select - 1]}`
);

// 사용자로부터 버스 노선의 종류를 나타내는 정수와 승객 나이 입력 받음. 노선별 기본 요금

const busObject = [{ name: "시내버스", cost: 1200 }];

const bus = ["시내버스", "광역버스", "마을버스"];
const bus_money = [1200, 2000, 1000];

const num = +window.prompt("버스 번호(1~3) 입력");
const age = +window.prompt("나이 입력");

if (age <= 7) {
  window.console.log(`탑승버스: ${bus[num - 1]}, 금액:free`);
} else if (8 <= age && age <= 19) {
  window.console.log(
    `탑승버스: ${bus[num - 1]}, 금액:${bus_money[num - 1] * 0.7}`
  );
} else if (65 <= age) {
  window.console.log(`탑승버스: ${bus[num - 1]}, 금액:free`);
} else {
  window.console.log(`탑승버스: ${bus[num - 1]}, 금액:${bus_money[num - 1]}`);
}
