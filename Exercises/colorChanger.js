var button = document.querySelector("#butt");
var body = document.querySelector("body");
var changed = true;
button.addEventListener("click", function(){
	if(changed){
		body.style.background = "pink";
		changed = false;
	}
	else{
		body.style.background = "white";
		changed = true;
	}
})