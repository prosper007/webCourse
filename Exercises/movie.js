var movies = [
	{
		name: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		name: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}	
]
var hasWatchedStr = "You have watched";
var hasNotWatched = "You have not seen"
movies.forEach(function(movie){
	if(movie.hasWatched){
		console.log(hasWatchedStr + " " +  "\"" + movie.name + "\"" + " - " + movie.rating + " stars");
	}
	else{
		console.log(hasNotWatched + " " +"\"" + movie.name + "\"" + " - " + movie.rating + " stars");
	}
});
