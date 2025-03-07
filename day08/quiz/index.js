// 1. 문자열 myString이 주어짐
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수 완성

const solution = (myString) =>
  [...myString]
    .map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase()))
    .join("");

// 2. 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean배열 finished가 매개변수로 주어질 때,
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return하는 solution함수 작성

// 예)
// const todo_list = ["probliemsolving", "practiceguitar", "swim", "studygraph"];
// const finished = ["true", "false", "true", "false"];
// result = ["practiceguitar", "studygraph"]

const solution1 = (todo_list, finished) =>
  todo_list.filter((x, i) => !finished[i]);

// 3. 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution함수를 완성
// 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함

// 예)
// const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];
// result = ["nami", "vex"]

const solution2 = (names) => names.filter((x, i) => i % 5 == 0);

// 4. 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록
// solution 함수 완성

const solution3 = (start_num, end_num) =>
  Array(start_num - end_num + 1)
    .fill(0)
    .map((x, i) => start_num - i);
