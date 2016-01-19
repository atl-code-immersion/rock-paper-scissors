function compChoice() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
	    return "rock";
	} else if(computerChoice <= 0.67) {
	    return "paper";
	} else {
	    return "scissors";
	}
}

$('#rock').click(function(){
	var userChoice = "rock"
	var computerChoice = compChoice();

	$('#result-well').removeClass('invisible');

	if(computerChoice === "rock"){
		// alert("It's a tie.");
		$('#result').html("It's a tie.");
	} else if(computerChoice === "paper"){
		// alert("Paper covers rock. You lose.");
		$('#result').html("Paper covers rock. You lose.");
	} else {
		// alert("Rock crushes scissors. You win!");
		$('#result').html("Rock crushes scissors. You win!");
	}
});

$('#paper').click(function(){
	var userChoice = "paper"
	var computerChoice = compChoice();

	$('#result-well').removeClass('invisible');

	if(computerChoice == "paper"){
		// alert("It's a tie.");
		$('#result').html("It's a tie.");
	} else if(computerChoice == "rock"){
		// alert("Paper covers rock. You win!");
		$('#result').html("Paper covers rock. You win!");
	} else {
		// alert("Scissors cut paper. You lose.");
		$('#result').html("Scissors cut paper. You lose.");
	}
});

$('#scissors').click(function(){
	var userChoice = "scissors"
	var computerChoice = compChoice();

	$('#result-well').removeClass('invisible');

	if(computerChoice == "scissors"){
		// alert("It's a tie.");
		$('#result').html("It's a tie.");
	} else if(computerChoice == "paper"){
		// alert("Scissors cut paper. You win!");
		$('#result').html("Scissors cut paper. You win!");
	} else {
		// alert("Rock crushes scissors. You lose.");
		$('#result').html("Rock crushes scissors. You lose.");
	}
});