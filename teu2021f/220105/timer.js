// setTimeout()を使ったカウントダウンタイマー
let timeoutTimerID = null;
let currentTimeoutSecond = null;

/**
 * タイマーを開始する。もし既にタイマーが実行されていればそのタイマーはキャンセルする
 * @param counter
 */
function startTimeoutTimer(counter){
  // 既にタイマーが設定されていれば消す
  if(timeoutTimerID !== null){
    clearTimeout(timeoutTimerID);
  }
  currentTimeoutSecond = counter;
  document.querySelector("#current_timeout_second").innerHTML = currentTimeoutSecond;
  timeoutTimerID = setTimeout(invokeTimeoutTimerTick, 1000);
}

/**
 * タイマーが有効時、1秒ごとに実行される
 * タイマーの値が0になったらダイアログを出してタイマーを止める
 */
function invokeTimeoutTimerTick(){
  currentTimeoutSecond -= 1;
  if(currentTimeoutSecond > 0){
    // タイマー秒数の残がある場合、次の1秒先のタイマーをセットして終了
    document.querySelector("#current_timeout_second").innerHTML = currentTimeoutSecond;
    timeoutTimerID = setTimeout(invokeTimeoutTimerTick, 1000);
  }else{
    // タイマー秒数の残がない場合、タイマー終了
    document.querySelector("#current_timeout_second").innerHTML = "未設定";
    window.alert("タイマーが時間切れしました");
  }
}