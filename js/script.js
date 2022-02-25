// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// ? chiedere all'utente il suo indirizzo email (prompt);
// ? assegnarlo ad una nuova variabile;
// ? creare un array che contenga una lista di email;
// ? controllare se la mail inserita dall'utente sia presente nell'array; ( con ciclo for );
// ? condizione = è presente ? - si (mostra messaggio positivo) - no ( mostra messaggio negativo);

const userEmail = prompt('Inserisci la tua mail');
const emailList = ['jehege7861@libero.it', 'mrti11@hotmail.it', 'duneissausefe-7721@gmail.com', 'alessio.rossi@gmail.com'];
const outputElement = document.querySelector('p#output');

for ( let i = 0 ; i < emailList.length ; i++) {
	if ( userEmail == (emailList[i]) ) {
		console.log('Accesso autorizzato')
		outputElement.append('Accesso autorizzato');
	} else {
		console.log('match not found');
	}
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Consigli generali
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// ? creare un input button
// ? cliccando sul bottone viene generato un numero random ( da 1 a 6, sia per il giocatore, sia per il computer );
// ? confrontare i due numeri random -> il numero più alto vince



