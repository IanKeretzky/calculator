const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>{

    btn.addEventListener("click", ()=>  {
      if (btn.id === "=") {
        // faz operação matematica o eval 
        display.value = eval(display.value);
      } else if(btn.id === "ac"){
        display.value = "";

      } else if ( btn.id === "del") {
        // slice serve pra deletar, e man, o 0 -1 é para apagar na ordem contraria a escrita (direita pra esquerda)
        display.value = display.value.slice(0,-1)
      } else {
        display.value += btn.id
      }
      
    })


})

function alternarModo(){
    document.body.classList.toggle("dark-mode");
}