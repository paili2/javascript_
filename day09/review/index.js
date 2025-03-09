// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록
// solution함수 완성

const solution = (my_string) =>
  [...my_string]
    .map((x) => (x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .reduce((a, c) => a + c);

console.log(solution("cccCCC"));
console.log(solution("abCdefghIJ"));

// 2. 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11이상이면 리스트에 있는 모든 원소의 합
// 10 이하이면 모든 원소의 곱 return
// num1 = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]; => 51
// num2 = [2, 3, 4, 5]; => 120

const solution1 = (num_list) =>
  num_list.join("").length >= 11
    ? num_list.reduce((a, c) => a + c)
    : num_list.reduce((a, c) => a * c);

console.log(solution1(num1));
console.log(solution1(num2));
