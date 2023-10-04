$('#exampleModal').modal();

function clickSecondButton(){
  document.querySelector('#exampleModalBody').innerHTML = "2つめのボタンが押された";
  $('#exampleModal').modal();
}
