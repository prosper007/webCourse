var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_ref", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//     title:"Holla at your boy",
//     content: "That was Wizkid's breakout song!"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//       User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else{
//             foundUser.posts.push(post)
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else{
//                     console.log(data);
//                 }
//             });
//         }
//     }); 
//     }
// });

// User.create({
//     email:"bob@gmail.com",
//     name: "Bob Belcher"
// });

// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// })