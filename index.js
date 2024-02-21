
///Costanti
const inputNome = document.querySelector(".inputnome");
let inputKm = document.querySelector(".inputkm");
let selectAge = document.querySelector(".select-age");
const sendButton = document.querySelector(".invia");
const resetButton = document.querySelector(".reset");
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
const prezzoKm = 0.21;

//Bottone Reset//
resetButton.addEventListener('click',function(){
  // resetto il value dell'input
  inputNome.value = '';
  inputKm.value = '';
  selectAge.value = '';
})

//Bottone Invia//
sendButton.addEventListener('click',function(event){
  event.preventDefault();
  const name = inputNome.value;
  const km = parseFloat(inputKm.value);
  const age = selectAge.value;
  console.log(name,km,age);
  let prezzoBiglietto = inputKm.value * prezzoKm;
  
  ////Impostare sconto eta minorenne
if(selectAge.value == "minorenne") {
  prezzoMinorenni = prezzoBiglietto * scontoMinorenni;
  prezzoBiglietto = prezzoBiglietto - prezzoMinorenni;
  console.log(prezzoBiglietto)
}
////Impostare eta Anziano
else if(selectAge.value == "anziano") {
  prezzoAnziani = prezzoBiglietto * scontoAnziani;
  prezzoBiglietto = prezzoBiglietto - prezzoAnziani;
  console.log(prezzoBiglietto);
}
////Impostare eta maggiorenne
else{
  console.log(prezzoBiglietto);
}
////Stampo su HTML
document.getElementById("prezzoTotale").innerHTML = (prezzoBiglietto.toFixed(2)) +" €"; 
document.getElementById("nome").innerHTML = (inputNome.value);
document.getElementById("offerta").innerHTML = (selectAge.value);
document.getElementById("carrozza").innerHTML = Math.floor(Math.random()*11-1);
document.getElementById("cp").innerHTML = Math.floor(Math.random()*90000+10000);
});

