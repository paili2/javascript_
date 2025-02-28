// 1. 사용자로부터 단어를 입력받고 문자의 길이가 홀수면 🍎, 짝수면 🥕 콘솔 출력
const word = prompt("단어 입력");
console.log(`${word.length % 2 ? "🍎" : "🥕"}`);

// 2. 사용자로부터 단어를 입력받은 후, 해당 문자열의 처음 3글자를 대문자로 변환하여 콘솔에 출력
const word1 = prompt("단어 입력");
console.log(`${word1.slice(0, 3).toUpperCase() + word.slice(3)}`);

// 3. 사용자로부터 입력받은 문장을 공백을 기준으로 단어 배열로 분리하여 출력
const sentence = prompt("문장 입력");
console.log(`${sentence.split(" ")}`);

// 4. 사용자로부터 문자열을 입력받고, 그 문자열에 알파벳 'a'가 포함되어 있다면 "포함", 그렇지 않다면 "미포함"을 출력
const user_input = prompt("문자열 입력");
console.log(`${user_input.includes("a") ? "포함" : "미포함"}`);

// 5. 사용자에게 문자열을 입력받고, 그 문자열의 길이가 10글자 보다 적으면 3회 반복, 많으면 대문자화해서 콘솔로 출력

const user_input1 = prompt("문자열 입력");
const answer =
  user_input1.length < 10 ? user_input1.repeat(3) : user_input1.toUpperCase();
console.log(answer);
