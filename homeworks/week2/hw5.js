function join(str, concatStr) {
  let ans = '';
  str.forEach((item, index) => {
    if (index === str.length - 1) {
      ans += item;
      return;
    }
    ans += item + concatStr;
  });
  return ans;
}

function repeat(str, times) {
  let ans = '';
  for (let i = 0; i < times; i += 1) {
    ans += str;
  }
  return ans;
}

console.log(join([1, 2, 3], '!'));
console.log(join([1, 2, 3], ''));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));

console.log(repeat('a', 5));
console.log(repeat('123123a', 5));
console.log(repeat('xxxxx!!', 5));
