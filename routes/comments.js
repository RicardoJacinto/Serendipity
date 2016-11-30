//======================
// Comment Routes
//======================

var express = require("express");
var router = express.Router(); 
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var User = require("../models/user");
var middleware = require("../middleware")

router.get("/campgrounds/:id/comments/new",middleware.isLoggedIn, function(req, res){
    
    Campground.findById(req.params.id, function(err, foundCamp){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {campground: foundCamp});
        }
        
    });
   
});

router.post("/campgrounds/:id/comments", middleware.isLoggedIn, function(req,res){
    
    
    
  Campground.findById(req.params.id, function(err, campground){
     if(err){
         console.log(err);
         res.redirect("/campground");
     } else
     {
         
              Comment.create(req.body.comment, function(err, nComment){
            
            if(err){
                console.log(err);
               
            }else
            {
                
                nComment.author.id = req.user._id;
                nComment.author.username = req.user.username;
                nComment.save();
                
                
                console.log("=============================");
                console.log("A new comment was created...");
                console.log(nComment);
                console.log("=============================");
            
            
       User.findById(req.user._id, function(err, foundUser){
           
           if(err){
               console.log(err);
           }else{
               console.log(foundUser);
           }
           
       });
      
     
                
                campground.comments.push(nComment);
                campground.save();
                console.log("=============================");
                console.log(campground);
                console.log("=============================");
                
                req.flash("success","You have successfully created a new comment");
                res.redirect("/campgrounds/" + campground._id);
            }
              
        });
    
    
     }
      
  });
 });
 
  //======================
  // Edit Comment
  //======================
 
 router.get("/campgrounds/:id/comments/:comment_id/edit", middleware.checkCommentOwnership,function(req,res){
   
     
          Comment.findById(req.params.comment_id, function(err, foundComment){
         if(err){
             console.log(err);
             res.redirect("back");
         }else{
              res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
            
         }
                
      });  
     
 });
 
  //======================
  // Update Comment
  //======================
  
  router.put("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req,res){
     
     Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
         if(err){
             console.log(err);
             res.send("back");
             
            }else{
                  req.flash("success","You have successfully edit your comment");
                  res.redirect("/campgrounds/" + req.params.id);
                  console.log("Comment successfully edited");
                  console.log(req.body.comment);
             }
        
         
     });
   
    });
    
 //======================
 // DELETE
 //======================
    
      router.delete("/campgrounds/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req,res){
      
      Comment.findByIdAndRemove(req.params.comment_id, function(err){
          if(err){
              console.log(err);
              res.redirect("back");
          }else{
              
              req.flash("success","You have successfully deleted your comment");
              res.redirect("/campgrounds/" + req.params.id);
              console.log("A comment was deleted");
          }
          
      }) ;
       
   });
 

  
   

     
    
  
  module.exports = router;
 