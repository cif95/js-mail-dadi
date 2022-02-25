// * mail check exercise

// ? chiedere all'utente il suo indirizzo email (prompt);
// ? assegnarlo ad una nuova variabile :

const userEmail = prompt('Inserisci la tua mail');

// ? creare un array che contenga una lista di email :

const emailList = ['jehege7861@libero.it', 'mrti11@hotmail.it', 'duneissausefe-7721@gmail.com', 'alessio.rossi@gmail.com'];
const mailCheckOutputElement = document.querySelector('p#mail-output');


// ? controllare se la mail inserita dall'utente è presente nell'array; ( con ciclo for ) :

for ( let i = 0 ; i < emailList.length ; i++) {

	// ? condizione = è presente ?  
	
	if ( userEmail == (emailList[i]) ) {   // ? - si (mostra messaggio positivo)
		console.log('match found')
		mailCheckOutputElement.append('match found');
	} else {                               // ? - no ( mostra messaggio negativo)
		console.log('match not found');
	}
}


// * roll the dice exercise
// ? creare un input button
// ? associare il button ad una nuova variabile :

const startBtn = document.getElementById('start-btn');

// ? associare ad una nuova variabile l'element dom per l'output del risultato :
const diceOutputElement = document.querySelector('p#dice-output');

 // ? creo un array composto da numeri da 1 a 6
const diceRange = [1, 2, 3, 4, 5, 6];

let userNumber = "";
let randomNumber = "";

// ? cliccando sul bottone vengono generati due numeri random da 1 a 6, uno per il giocatore, uno per il computer
startBtn.addEventListener( 'click', function() {
	diceOutputElement.innerHTML = '';
	diceOutputElement.classList.remove('text-success', 'text-danger', 'text-secondary');
	userNumber = Math.floor(Math.random() * diceRange.length) + 1;
	randomNumber = Math.floor(Math.random() * diceRange.length) + 1;

	// * vince il numero più grande :

	if ( userNumber > randomNumber ) {
		diceOutputElement.append( `
		Your number: ${userNumber}, 
		my number: ${randomNumber} 
		-> You Win! :)` );
		diceOutputElement.classList.add('text-success');
	} else if ( userNumber < randomNumber ) {
		diceOutputElement.append( `
		Your number: ${userNumber}, 
		my number: ${randomNumber}  
		-> You Lose! :(`);
		diceOutputElement.classList.add('text-danger');
	} else {
		diceOutputElement.append( `
		Your number: ${userNumber}, 
		my number: ${randomNumber} 
		-> Draw` );
		diceOutputElement.classList.add('text-secondary');
	}
})