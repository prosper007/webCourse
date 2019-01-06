var todos = ["Obi is a  boy"];
window.setTimeout(function() {
	var input = prompt("What would you like to do?");
	while(input !== "quit"){
		if( input === "list"){
			console.log("**********");
			todos.forEach(function(todo, index){
				console.log(index + ": " + todo);
			});
			console.log("**********");
		}
		else if(input === "new"){
			var newTodo = prompt("Enter new Todo");
			todos.push(newTodo);
			console.log("Added todo");
		}
		else if(input === "delete"){
			var index = prompt("Enter index of Todo to delete");
			todos.splice(index,1);
			console.log("Deleted todo");
		}

		input = prompt("What would you like to do?");
	}
	console.log("Bye!")
	
}, 500);