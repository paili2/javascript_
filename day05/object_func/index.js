// 기본: num, str, bool, null, undefined
// 참조: arr, obj, function

const bakery = {
  sale: 0,
  sellBread: function () {
    console.log("빵 팔기!");
    this.sale = this.sale + 1000;
  },
};
console.log(bakery.sale);
bakery.sellBread();
bakery.sellBread();
bakery.sellBread();
console.log(bakery.sale);

// cgv
// 영화[미키17, 퇴마록, 캡틴 아메리카]
// 매출: 0
// 영화 팔기 함수 => 번호를 받으면 ~~영화가 판매되었습니다! 콘솔
const select_movie = +prompt("1. 미키17 / 2. 퇴마록, 3. 캡틴 아메리카");

const cgv = {
  movies: [
    { name: "미키17", price: 10000 },
    { name: "퇴마록", price: 9000 },
    { name: "캡틴 아메리카", price: 8000 },
  ],
  sale: 0,
  sellTicket: function (x) {
    if (0 <= x && x <= 2) {
      console.log(`${this.movies[x]}영화가 판매되었습니다!`);
      this.sale = this.sale + this.movies[x].price;
    } else console.log("해당 번호의 영화는 존재하지 않습니다");
  },
  checkSale: function () {
    console.log(`총 매출: ${this.sale}`);
  },
};

cgv.sellTicket(0);
cgv.sellTicket(0);
cgv.sellTicket(0);
cgv.checkSale();

// 어떤 것을 함수?
// 동사면 함수

// 자동차라는 object
// 현재 속도, 속도 올리기, 속도 내리기, 현재 속도 나타내기기

const car = {
  speed: 0,
  speedUp: function () {
    this.speed = this.speed + 1;
  },
  speedDown: function () {
    if (this.speed == 0) {
      this.speed = 0;
    } else {
      this.speed = this.speed - 1;
    }
  },
  speedShow: function () {
    console.log(`현재 속도: ${this.speed}`);
  },
};

car.speed;
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedShow();
