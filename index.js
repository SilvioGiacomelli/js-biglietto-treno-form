
///Costanti
const inputNome = document.querySelector(".inputnome");
const inputKm = document.querySelector(".inputkm");
const selectAge = document.querySelector(".select-age");
const sendButton = document.querySelector(".invia");
const resetButton = document.querySelector(".reset");
const maggiorenne = document.querySelector(".maggiorenne")
const minorenne = document.querySelector(".minorenne")
const anziano = document.querySelector(".anziano")
const scontoMinorenni = 0.2;
const scontoAnziani = 0.4;
const prezzoKm = 0.21;

////Prezzo biglietto
let prezzoBiglietto = inputKm * prezzoKm;

//Bottone Invia//
sendButton.addEventListener('click',function(){
  const name = inputNome.value;
  const km = inputKm.value;
  const age = selectAge.value;
  console.log(name,km,age);
});

//Bottone Reset//
resetButton.addEventListener('click',function(){
  // resetto il value dell'input
  inputNome.value = '';
  inputKm.value = '';
  selectAge.value = '';
});

////Impostare sconto eta minorenne
if(selectAge = minorenne) {
  prezzoMinorenni = prezzoBiglietto * scontoMinorenni;
  prezzoBiglietto = prezzoBiglietto - prezzoMinorenni;
  console.log(prezzoBiglietto);
}
////Impostare eta Anziano
else if(selectAge = anziano) {
  prezzoAnziani = prezzoBiglietto * scontoAnziani;
  prezzoBiglietto = prezzoBiglietto - prezzoAnziani;
  console.log(prezzoBiglietto);
}
////Impostare eta maggiorenne
else (selectAge = maggiorenne) {
  console.log(prezzoBiglietto);
}

////Stampo su HTML
document.getElementById("prezzoTotale").innerHTML += prezzoBiglietto + " €"; 