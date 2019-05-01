function capitalize(str) {
  const arr = str.split('');
  let ans = '';
  if (arr[0].toUpperCase() === arr[0]) {
    [ans] = arr;
    arr[0] = ans;
  } else {
    [ans] = arr;
    ans = ans.toUpperCase();
    arr[0] = ans;
  }
  return (arr.join(''));
}

console.log(capitalize('hello'));
