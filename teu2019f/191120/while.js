console.log("while.jsの読み込みテスト");

let num = 0;
while(num < 100){
  num++;
  if(num % 3 != 0){
    continue;
  }
  console.log(`num: ${num}は3の倍数`);
}

