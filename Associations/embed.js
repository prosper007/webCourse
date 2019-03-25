var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true});

//POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("post", postSchema);


//USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("user", userSchema);



// var newUser = new User({
//     email: "obi.jioku.edu",
//     name: "Hermoine Granger"
// });

// newUser.posts.push({
//     title:"My name's Adaobi",
//     content:"Hi guys. My name is actually not Hermoine. It's Adaobi"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on College",
//     content: "College sucks"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post)
//     }
// });

User.findOne({name: "Hermoine Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else{
        user.posts.push({
            title: "Oluwa",
            content: "Oluwa is involved"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else{
                console.log(user)
            }
        })
    }
});