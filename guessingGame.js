var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if(guess === secretNumber){
	alert("You got it man!");
}
else if(guess > secretNumber){
	alert("Nah too high")
}
else {
	alert("Too low bruh")
}
