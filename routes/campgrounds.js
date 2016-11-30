//======================
// Campground Routes
//======================


var express = require("express");
var router = express.Router(); 
var Campground = require("../models/campground");
var middleware = require("../middleware");


router.get("/campgrounds", function(req,res){
    
    
    Campground.find({}, function(err, campgrounds){
        
        if(err){
            console.log(err);
            
        }else
        {
             res.render("campgrounds/index", {campgrounds: campgrounds});
        
        }
            
    });
    
});

router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res) {
    
    res.render("campgrounds/new");
});

// REMEMBER ROUTES ORDER MATTER
router.get("/campgrounds/:id", function(req,res){
    
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
      
       if(err){
           console.log(err);
       } 
       else{
        
              res.render("campgrounds/show", {campground: foundCampground });
       }
        
        
    });
 

});

router.post("/campgrounds", middleware.isLoggedIn, function(req,res){
    
    var campName = req.body.newCamp;
    var campImage = req.body.newImage;
    var campDescription = req.body.newDescription;
    var author = {
        
        id : req.user._id,
        username : req.user.username
    };
    
    var addedCamp = {name: campName, image: campImage, description: campDescription, author: author};
    
    Campground.create(addedCamp, function(err, newCamp){
        
        if(err){
            console.log("A error occured while creating a New Campground");
        }else
        {
           
           req.flash("success", "You have successfully created a post.");
           console.log("A new campground was created");
           res.redirect("/campgrounds");
        }
    });
    
  });
  
  
   //======================
   // EDIT 
   //======================
   
 router.get("/campgrounds/:id/edit", middleware.checkCampOwnership, function(req,res){
     
      Campground.findById(req.params.id, function(err, foundCampground){
     
                res.render("campgrounds/edit", {campground: foundCampground});
      });
       
     
 });
 
 
   //======================
   // UPDATE
   //======================
   
  router.put("/campgrounds/:id", middleware.checkCampOwnership, function(req,res){
     
    Campground.findByIdAndUpdate(req.params.id, req.body.camp, function(err, updatedCamp){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else{
           
           req.flash("success", "You have successfully edited your post.");
           res.redirect("/campgrounds/" + req.params.id);
           
           
           console.log("Campground successfully edited");
           console.log(updatedCamp);
           
       }
        
    });
 });
 
 //======================
 // DELETE
 //======================
 
   router.delete("/campgrounds/:id", middleware.checkCampOwnership, function(req,res){
      
      Campground.findByIdAndRemove(req.params.id, function(err){
          if(err){
              console.log(err);
              res.redirect("/campgrounds");
          }else{
              
              req.flash("success","You have successfully deleted your post.")
              res.redirect("/campgrounds");
          }
          
      }) ;
       
   });
  
     
    
  
  
  module.exports = router;