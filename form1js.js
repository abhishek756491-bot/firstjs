function Add() {
  let n1 = Number(document.querySelector(".firnum").value);

  let n2 = Number(document.querySelector(".secnum").value);
  
  document.querySelector(".res").innerHTML=n1+n2;
}

function sub() {
  let n1 = Number(document.querySelector(".firnum").value);

  let n2 = Number(document.querySelector(".secnum").value);
  
  document.querySelector(".res").innerHTML=n1-n2;
}
function mul() {
  let n1 = Number(document.querySelector(".firnum").value);

  let n2 = Number(document.querySelector(".secnum").value);
  
  document.querySelector(".res").innerHTML=n1*n2;
}