// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedi all’utente la sua email,
const email_user = prompt('Inserisci la tua e-mail');
console.log(email_user);

// controlla che sia nella lista di chi può accedere,
const recorded_emails = ["gigino98@gmail.com", "pieroildrago_89@hotmail.it", "dott.piero75@hotmail.it", "spaccaturadimensionale@gmail.com", "rebecca99@hotmail.it"]
console.log(recorded_emails);


let trovata = false;
for(let i = 0; i < recorded_emails.length; i++) {
  console.log(recorded_emails[i]);
  if (email_user === recorded_emails[i]) {
    trovata = true;
  }
}  
// stampa un messaggio appropriato sull’esito del controllo.
if (trovata == true) {
    alert("Accesso effettuato")
} else {
 alert("Email non trovata")
}
   