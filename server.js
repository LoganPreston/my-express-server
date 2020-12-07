//jshint esversion:6
const express=require('express');
const app=express();

app.get("/",function(req,res){
    console.log(req);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: personal@loganpreston.com");
});

app.get("/about",function(req,res){
    res.send("About me: I like bananas");
});


app.listen(3000,function(){
    console.log("Server started on port 3000")
});
