var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset")
var p1ScoreSpan = document.querySelector("#p1Score");
var p2ScoreSpan = document.querySelector("#p2Score");
var limitDisplay = document.querySelector("#limit")
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var limit = 7;

p1Button.addEventListener("click", function(){
	if(p1Score < limit && p2Score < limit){
		p1Score++;
		p1ScoreSpan.textContent = p1Score;
	}
	if(p1Score === limit){
		p1ScoreSpan.classList.add("winner");
	}
});

p2Button.addEventListener("click", function(){
	if(p1Score < limit && p2Score < limit){
		p2Score++;
		p2ScoreSpan.textContent = p2Score;
	}
	if(p2Score === limit){
		p2ScoreSpan.classList.add("winner");
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreSpan.textContent = p1Score;
	p2ScoreSpan.textContent = p2Score;
	p1ScoreSpan.classList.remove("winner");
	p2ScoreSpan.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	limit = Number(numInput.value);
	limitDisplay.textContent = limit;
	reset();
});
