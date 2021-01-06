//`function-test.js`で「2018 * 1010」を計算し、その結果を返り値として返す関数を書く
function calc(){
    return 2018 * 1010;
}

// 引数を2つ持ち、その二つの引数のかけ算の結果を返す関数を書く
function multiply(a, b){
    return a * b;
}

// 引数を2つ持ち、その二つの引数をかけ算の結果の1の位の値を返す関数を書く
function multipliedOnesPlace(a, b){
    return a * b % 10;
}

// 引数を2つ持ち、その二つの引数をかけ算の結果の10の位の値を返す関数を書く
function multipliedTensPlace(a, b) {
    return Math.floor(a * b % 100 / 10);
}
