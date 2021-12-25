function factorial(n) {
  let j = 1;
  for (let i = 0; i < n; i++) {
    j = j * (n - i);
  }
  return j;
}
