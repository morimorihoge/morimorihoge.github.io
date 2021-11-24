function arg3(arg1, arg2, arg3){
  console.log(
      `arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`
  );
}

arg3("引数1", "引数2", "引数3");

function defaultArg(arg1, arg2 = "デフォルト値"){
  console.log(
      `arg1: ${arg1}, arg2: ${arg2}`
  );
}

defaultArg("引数1");
defaultArg("引数1", "引数2");

function calc(){
  return 2021 * 1010;
}

console.log(`calc() の計算結果: ${calc()}`);

function multiply(numA, numB){
  return numA * numB;
}

console.log(
    `multiply(5, 12): ${multiply(5, 12)}`
);

function multiply1Digit(numA, numB){
  return (numA * numB) % 10;
}
console.log(
    `multiply1Digit(5, 12): ${multiply1Digit(5, 12)}`
);

function multiply10Digit(numA, numB){
  return Math.floor(numA * numB / 10 % 10);
}
console.log(
    `multiply10Digit(5, 12): ${multiply10Digit(5, 12)}`
);


