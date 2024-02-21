

const inputNome = document.querySelector(".inputnome");
const inputKm = document.querySelector(".inputkm");
const selectAge = document.querySelector(".select-age");
const sendButton = document.querySelector(".invia");
const resetButton = document.querySelector(".reset");

//Bottone Invia//
sendButton.addEventListener('click',function(){
  const name = inputNome.value;
  const km = inputKm.value;
  const age = selectAge.value;
  console.log(name,km,age);
})

//Bottone Reset//
sendButton.addEventListener('click',function(){
  // resetto il titolo
  console.log(inputNome.value);
  // resetto il value dell'input
  inputNome.value = '';
})