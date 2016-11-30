var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");


 //======================
  // Middleware
  //======================
  
  middlewareObj.isLoggedIn = function(req,res,next){
      
      if(req.isAuthenticated()){
          
          return next();
      }else
      {
          req.flash("error", "You need to be logged in to do that.");
          res.redirect("/login");
          console.log("You need to be logged in to access this page");
      }
      
      
  }     ;

middlewareObj.checkCampOwnership = function(req,res,next){
    
    if(req.isAuthenticated()){
            
        Campground.findById(req.params.id, function(err, foundCampground){
         if(err){
             console.log(err);
             req.flash("error","Campground not found...");
             res.redirect("back");
         }else{
            if(foundCampground.author.id.equals(req.user._id)){
                
               next();
            }else{
               
                console.log("A user tried to edit or remove another users camp.");
                 req.flash("error","You don't have permission to access this page...");
                res.redirect("back");
            }
            
         }
        });
     
     }else {
        
         console.log("A user tried to edit or remove a camp without being logged in.");
          req.flash("error", "You need to be logged in to do that");
         res.redirect("back");
     }
     
     
 };
 
 middlewareObj.checkCommentOwnership = function(req,res,next){
      if(req.isAuthenticated()){
            
        Comment.findById(req.params.comment_id, function(err, foundComment){
         if(err){
             console.log(err);
             res.redirect("back");
         }else{
            if(foundComment.author.id.equals(req.user._id)){
                
               next();
            }else{
                
                
                console.log("A user tried to edit or remove another users comment.");
                 req.flash("error","You don't have permission to access this page...");
                res.redirect("back");
            }
            
         }
        });
     
     }else {
         console.log("A user tried to edit or remove a comment without being logged in.");
          req.flash("error", "You need to be logged in to do that");
         res.redirect("back");
     }
     
     
 };
  


module.exports = middlewareObj;