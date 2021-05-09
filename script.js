let dropBtn = document.querySelector(".drop-btn");
let burger = document.querySelector(".burger");
let tomato = document.querySelector(".tomato1");
dropBtn.addEventListener("click", ()=>{
  burger.textContent ='';
  window.location.reload(true);
})