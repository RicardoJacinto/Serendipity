  
  //======================
  // Authentication Routes
  //======================
  
  
var express = require("express");
var router = express.Router(); 
var User = require("../models/user");
var passport = require("passport");

 
 router.get("/", function(req, res){
    
    res.redirect("/campgrounds");
    
}); 
 
 router.get("/register", function(req,res){
     
    res.render("register");
     
 });
 
 // signup logic
 
 router.post("/register", function(req,res){
     
     User.register(new User({username: req.body.username}), req.body.password, function(err, user){
         if(err){
             
             console.log(err);
             req.flash("error", err.message);
             return res.redirect("/register");
         }
         passport.authenticate("local")(req,res,function(){
             req.flash("success", "Welcome to yelpCamp " + user.username);
             res.redirect("/campgrounds");
             
         });
         
     }); 
 });

 router.get("/login", function(req,res){
     
        
        res.render("login");
    
     
 });
 
 // login logic - middleware
 
  router.post("/login",
     
      passport.authenticate("local",
  
  {
    
      successRedirect: "/campgrounds", 
      failureRedirect: "/login",
      failureFlash: "Invalid username or password, please try again.",
      
  }), function(req, res){
    

     });

//logic route 

router.get("/logout", function(req,res){
     
     req.logout();
     req.flash("success", "You have successfully logged out")
     res.redirect("/campgrounds");
    
});


  
  module.exports = router;