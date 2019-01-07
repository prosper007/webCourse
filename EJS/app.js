var express = require("express");
var app = express();

// this serves the "public" directory to the server so it'll see it when we
// reference files
app.use(express.static("public"));

// this lets us leave out the ejs file extension by telling express that it's
// what we'll be using beforehand
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

app.get("/filw/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing})
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "Obi is a boy", author: "Amaka"},
            {title: "We go buy benz", author: "Minion"},
        ];
        res.render("posts", {posts: posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
});