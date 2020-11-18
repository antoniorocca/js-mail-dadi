//Esercizio email
var userMail = prompt("Inserisci la tua email")
console.log(userMail);
var emails = ["serena.rossi@libero.it", "mario.rossi@outlook.it", "giacomo.rossi@gmail.com"]
var mailTrovata = false;

for (var i = 0; i < emails.length; i++ ) {
   var email = emails[i];

   if (email === userMail) {
       mailTrovata = true;
   }
}

if (mailTrovata) {
   console.log("entra pure");
} else {
   console.log("accesso negato");
}

//Esercizio dadi
var player = Math.floor(Math.random() * 6) + 1;
var sistema = Math.floor(Math.random() * 6) + 1;
if (player > sistema) {
  console.log("HAI VINTO!");
} else if (player < sistema) {
  console.log("RITENTA ANCORA!");
} else {
  console.log("PAREGGIO!");
}
