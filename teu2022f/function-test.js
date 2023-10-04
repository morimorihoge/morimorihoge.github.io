function logHello(){
  console.log("logHello()関数を実行したよ");
}

function logHello2(message){
  console.log(`logHello2: ${message}`);
}

function logHello3(message1, message2, message3){
  console.log(`logHello3: ${message1}, ${message2}, ${message3}`);
}

function logHello4(message1, message2 = "Message2Default"){
  console.log(`logHello4: ${message1}, ${message2}`);
}

function logHello5(){
  return 2021 * 1010;
}

function multiply(a, b){
  return a * b;
}

function multiply1Digit(a, b){
  return (a * b) % 10;
}

function multiply2Digit(a, b){
  return Math.floor((a * b) / 10) % 10;
}
