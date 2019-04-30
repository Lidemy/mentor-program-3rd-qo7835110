function printFactor(n) {
  if (n <= 0) {
    return;
  }
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printFactor(10);
