function calc2019() {
  return 2019 * 1010;
}

function times(a, b){
  return a * b;
}

// a * bの結果の1の位を返す
function digit1(a, b){
  return (a * b) % 10;
}

// a * bの結果の10の位を返す
function digit2(a, b){
  return parseInt(((a * b) % 100) / 10);
}
