var userMail = prompt("Inserisci la tua e-mail");
var emails = ["serena.rossi@libero.it", "mario.rossi@outlook.it", "giacomo.rossi@gmail.com"];
console.log(userMail);
console.log([emails]);
console.log(userMail[emails]);

var numeroUtente = Number(prompt("Scegli un numero da 1 a 6"));
var numeroSistema = Math.floor(Math.random() * 6) + 1 ;
if (numeroUtente > numeroSistema) {
  alert("HAI VINTO!");
} else if (numeroUtente < numeroSistema) {
  alert("RITENTA ANCORA!");
} else {
  alert("SCELTA NON VALIDA");
}
