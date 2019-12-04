// 引数なしの関数
function testFunction(){
  console.log("testFunctionを実行");
}

// 引数を一つ持つ関数
function testMessage(message){
  console.log("引数の中身: " + message);
}

// 引数を3つ持つ関数
function testThree(var1, var2, var3){
  console.log(var1);
  console.log(var2);
  console.log(var3);
}

// 引数を2つ持ち、2つ目の引数がデフォルト値を持つ
function testDefault(var1, var2 = "でふぉると"){
  console.log(var1);
  console.log(var2);
}
