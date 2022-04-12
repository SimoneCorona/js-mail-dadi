// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Numero random del user
const user_num_rand = Math.floor(Math.random() * 6 + 1);
console.log("Il tuo numero é", user_num_rand);
// Numero random del computer
const cpu_num_rand = Math.floor(Math.random() * 6 + 1);
console.log("Il mio numero é", cpu_num_rand);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner_game
    if (user_num_rand === cpu_num_rand) {
        winner_game = "Abbiamo pareggiato!";
    } else if (user_num_rand < cpu_num_rand) {
        winner_game = "Hai perso!";
    } else if (user_num_rand > cpu_num_rand) 
        winner_game = "Hai vinto!";
    console.log(winner_game)
    
