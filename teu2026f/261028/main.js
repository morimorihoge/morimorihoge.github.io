// 好きなもの（食べ物・ゲームなど）を5つ入れた配列を作り、for で全部表示する
let favorites = ["ビール", "刺身", "TFT", "寝ること", "金"];
for(let i = 0;i < favorites.length;i++){
  console.log(favorites[i]);
}

// テストの点数の配列 [72, 85, 64, 90, 58] の合計と平均を、for で出す
// 平均は 合計 / 配列の length
let scores = [72, 85, 64, 90, 58];
let sum = 0;
for(let i = 0;i < scores.length;i++){
  sum += scores[i];  
}
let average = sum / scores.length;
console.log("合計: " + sum);
console.log("平均: " + average);

