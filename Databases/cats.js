var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String 
});

var Cat = mongoose.model("Cat", catSchema);

/*var george = new Cat({
    name: "Mrs Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong!")
    } else {
        console.log("We just saved a cat to the db!")
        console.log(cat);
    }
});*/

/*Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else{
        console.log(cat);
    }
});*/


Cat.find({}, function(err, cats){
    if(err){
        console.log("oh fuck");
        console.log(err);
    } else{
        console.log("All the cats...");
        console.log(cats);
    }
});

/*Cat.find({name:'Snow White'}).deleteOne(function(err, cat){
    if(err){
        console.log("Dude wtf is this??");
        console.log(err);
    } else{
        console.log("Deleted this schmuck");
        console.log(cat);
    }
});
*/
