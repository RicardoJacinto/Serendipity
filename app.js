var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var expressSanitizer = require("express-sanitizer");

var methodOverride = require("method-override");
var seedDB = require("./seeds");
var Campground  = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

var passport = require("passport");
var LocalStrategy = require("passport-local");

// Routes
var commentRoutes = require("./routes/comments"); 
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

//Passport Config

app.use(require("express-session")({
    
    secret: "I will change the world",
    resave: false,
    saveUninitialized: false
    
      }
    ));
    
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());





var url = process.env.DATABASEURL || "mongodb://localhost/yelpCampV11"
// Connect Mongoose
mongoose.connect(url, function(){
    
    console.log("The database 'yelpCamp' was initialized");
}); 



//seedDB();


// access ejs 
app.set("view engine", "ejs");
//Init bodyParser
app.use(bodyParser.urlencoded({extended: true}));    
//sanitizer - requirement - It needs to be after bodyParser
app.use(expressSanitizer());
app.use(express.static("public"));

// access override

app.use(methodOverride("_method")); 

//use var flash. Access connect flash

app.use(flash());



  //======================
  // Middleware for user state
  //======================

app.use(function(req,res,next){
    
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
    
}); 

app.use(commentRoutes);
app.use(campgroundRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   
   console.log("Yelp Camp server initialized...") ;
});


