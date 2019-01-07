var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sound = "screw you";
    switch(animal){
        case "pig":
            sound = "Oink";
            break;
        case "cow":
            sound = "Moo";
            break;
        case "dog":
            sound = "Woof Woof!";
            break;
    }
    var message = "The " + animal + " says '" + sound + "'";
    res.send(message);
});

app.get("/repeat/:text/:num", function(req, res) {
    var text = req.params.text;
    var num = Number(req.params.num);
    var string = "";
    for (var i = 1; i <= num; i++) {
        string += text + " ";
    }
    res.send(string);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});