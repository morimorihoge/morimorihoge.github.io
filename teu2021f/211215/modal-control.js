// modalを開くコード
// $('#exampleModal').modal();

function clickSecondButton(){
  document.querySelector("#exampleModalBody").innerHTML = "clickSecondButton()で書き換えた";
  $('#exampleModal').modal();
}
