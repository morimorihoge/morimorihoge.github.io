// 年齢を引数で受け取り、次のルールで文字列を返す関数 judgeAge を書いて、いろいろな年齢で試す
// function judgeAge(age){
//   let result;
//   if(age <= 0){
//     result = "エラー";
//   }else if(age < 18){
//     result = "未成年";
//   }else if(65 <= age){
//     result = "高齢者";
//   }else{
//     result = "成人";
//   }
//   console.log(`${age}歳は${result}です`);
// }
function judgeAge(age){
  let result;
  if(age <= 0){
    result = "エラー";
  }else if(age < 18){
    result = "未成年";
  }else if(18 <= age && age < 65){
    result = "成人";
  }else{
    result = "高齢者";
  }
  console.log(`${age}歳は${result}です`);
}

judgeAge(-1);
judgeAge(10);
judgeAge(30);
judgeAge(70);


// 0以下なら「エラー」
// 18より小さいなら「未成年」
// 65以上なら「高齢者」
// それ以外は「成人」
// 結果はテンプレートリテラルで「○歳は△△です」と表示する


// // 2つの数を受け取り、掛け算した結果を返す関数 multiply を書く
// function multiply(a, b){
//   return a * b;
// }

// console.log(multiply(3, 4));
// console.log(multiply(3, 10));

// // 合計金額と人数を受け取り、1人あたりの金額を返す関数 splitBill を書く
// function splitBill(total, people){
//   return Math.ceil(total / people);
// }

// console.log(splitBill(3000, 3));
// console.log(splitBill(5000, 6));
// // ヒント：端数を切り上げるには Math.ceil(値) を使う
// // 返り値を変数に入れて、console.log で表示する














// // 名前を引数で受け取り「○○さん、ようこそ」と表示する関数を書いて、3人分呼び出す
// function welcome(name){
//   console.log(name + "さん、ようこそ");
// }

// console.log("----------------");
// welcome("もり");
// welcome("たなか");
// welcome("すずき");

// // 引数を2つにして、名前と好きなものを表示するように変える
// function welcome2(name, favorite){
//   console.log(name + "さんの好きなものは" + favorite + "です");
// }

// console.log("----------------");
// welcome2("もり", "りんご");
// welcome2("たなか", "みかん");
// welcome2("すずき", "バナナ");

// // 引数を渡さずに呼び出すと、何が表示されるか試す
// console.log("----------------");
// welcome();
// welcome2();






















// // リポジトリに「261021」フォルダを作り、index.html と main.js を作る（前回と同じ書き方）
// // index.html は、bodyの最後で <script src="main.js"></script> を書いて main.js を読み込む
// // main.js に次を書いて、Consoleで確かめる

// // 自分の名前を変数 name に、好きな数を変数 num に入れて表示する
// let name = "もりまさと";
// let num = 123456;
// console.log(name);
// console.log(num);

// // num に別の数を入れ直してから、もう一度表示する
// num = 654321;
// console.log(num);

// // typeof "123" と typeof 123 を表示して比べる
// console.log(typeof "123");
// console.log(typeof 123);

// // 宣言だけした変数（let x;）を表示すると何が出るか見てみる
// let x;
// console.log(x);

// // 今日の演習は、すべてこの 261021/main.js に書き足していきます

