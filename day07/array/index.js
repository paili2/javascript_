const num = [3, 9, 15, 23, 40];

const a = num.some((x) => {
  return x < 5;
});

console.log(a); // true

const b = num.every((x) => {
  return x % 2;
});

const menu = [
  { name: "딸기", price: 3000 },
  { name: "멜론", price: 4000 },
  { name: "키위", price: 4500 },
  { name: "수박", price: 5000 },
];

const c = menu.find((x) => {
  return x.price == 4000 || x.price == 4500;
});

console.log(c);
