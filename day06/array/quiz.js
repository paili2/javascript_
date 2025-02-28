const numArray = [3, 12, 21, 30, 45];
const strArray = ["americano", "latte", "mint", "cocoa", "lemonade"];

// 1. numArray 홀수면 '🥚', 짝수면 '🍎'로 바꾸기

const oddEven = (x) => {
  return x % 2 ? "🥚" : "🍎";
};

console.log(numArray.map(oddEven));

// 2. numArray 5의 배수면 "5의 배수!" 아니면 그대로 냅두기

const multiples = (x) => {
  return x % 5 == 0 ? "5의 배수!" : x;
};

console.log(numArray.map(multiples));

// 3. numArray 20보다 작으면 0으로 바꾸고 아니면 50으로 바꾸기
const a = (x) => {
  return x < 20 ? "0" : "50";
};

console.log(numArray.map(a));

// 4. strArray 문자의 길이가 홀수이면 '💛' 짝수이면 '🥝'로 바꾸기
const a1 = (x) => {
  return x.length % 2 ? "💛" : "🥝";
};

console.log(strArray.map(a1));

// 5. strArray 문자에서 'a','e'가 포함되면 대문자화 아니면 그대로 냅두기
const a2 = (x) => {
  return x.includes("a") || x.includes("e") ? x.toUpperCase() : x;
};

console.log(strArray.map(a2));

// 6. strArray 문자에서 l로 시작하면 문자의 길이로 바꾸고 아니면 대문자화로 하기

const a3 = (x) => {
  return x.startsWith("l") ? x.length : x.toUpperCase();
};

console.log(strArray.map(a3));
