var mongoose = require("mongoose");
var Campground  = require("./models/campground");
var Comment = require("./models/comment");

var campgrounds= [
        
        { name: "Cloud's rest",
          image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
          description: "Lorem ipsum dolor sit amet, ad cum lorem fabulas. Quo vero utamur constituam cu, eirmod saperet moderatius in pro. Quo ne vidit impedit intellegat, mei in oratio consetetur. Affert posidonium dissentiunt mei et, errem efficiantur necessitatibus sit in, oratio impetus eos ea. Malorum splendide ei eum, aliquip quaeque eu nam."
        },
        {
            
          name: "The Golden Dagger",
          image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
          description: "Lorem ipsum dolor sit amet, ad cum lorem fabulas. Quo vero utamur constituam cu, eirmod saperet moderatius in pro. Quo ne vidit impedit intellegat, mei in oratio consetetur. Affert posidonium dissentiunt mei et, errem efficiantur necessitatibus sit in, oratio impetus eos ea. Malorum splendide ei eum, aliquip quaeque eu nam."
       
        },
        {
            
         name: "Skyfall Camp",
         image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
         description: "Lorem ipsum dolor sit amet, ad cum lorem fabulas. Quo vero utamur constituam cu, eirmod saperet moderatius in pro. Quo ne vidit impedit intellegat, mei in oratio consetetur. Affert posidonium dissentiunt mei et, errem efficiantur necessitatibus sit in, oratio impetus eos ea. Malorum splendide ei eum, aliquip quaeque eu nam."    
         
        },
        {
          name: "Montain Creek",
          image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
          description: "Lorem ipsum dolor sit amet, ad cum lorem fabulas. Quo vero utamur constituam cu, eirmod saperet moderatius in pro. Quo ne vidit impedit intellegat, mei in oratio consetetur. Affert posidonium dissentiunt mei et, errem efficiantur necessitatibus sit in, oratio impetus eos ea. Malorum splendide ei eum, aliquip quaeque eu nam."
        }
    
    
    ];
    
    var comment = 
        
        {
            
         text: "The place is lovely but there isn't enough donuts... DOH!!!", 
         author: "Homer"
         
        };
        
        



function seedDB(){
    
     Campground.remove({}, function(err){
   if(err){
       
   } else{
       console.log("============================================");
       console.log("The campgrounds were removed successfully");
   }
      
   }); 
   
    Comment.remove({}, function(err){
   if(err){
       
   } else{
       console.log("============================================");
       console.log("The comments were removed successfully");
   }
      
   }); 
     // Add a few campgrounds 
    
    campgrounds.forEach(function(camp){
       
       Campground.create(camp, function(err, createdCamp){
           if(err){
               console.log(err);
           }else
           {
             
               
               Comment.create(comment, function(err, createdComment){
                  if(err){
                      console.log(err);
                  }else{
                      
                  
                  createdCamp.comments.push(createdComment);
                  createdCamp.save();
                  console.log("============================================");
                  console.log(createdCamp);
                  
                  }
                  
               });
               
           }
           
           
           
       }); 
        
    });
   
}
module.exports = seedDB;
