function reverse(str) {
  const arr = str.split('');
  const arr2 = [];
  arr.forEach((item, index) => {
    arr2[arr.length - 1 - index] = item;
  });
  console.log(arr2.join(''));
}

reverse('hello');
reverse('1231231');
reverse('[lkspfkasfpas]');
