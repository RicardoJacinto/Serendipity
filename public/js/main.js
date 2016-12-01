


// get flash messages
var getAlert1 = $("#alert-1");
var getAlert2 = $("#alert-2");

var addComment = ("#add-comment");
//add comment

var clicked=false;

var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1444012236767-1b471c68781c?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://static.pexels.com/photos/192518/pexels-photo-192518.jpeg)",
        "url(https://images.unsplash.com/photo-1445888761652-fc13cbb0d819?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://static.pexels.com/photos/167696/pexels-photo-167696.jpeg)",
        "url(https://images.unsplash.com/photo-1444228250525-3d441b642d12?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://static.pexels.com/photos/3967/person-woman-night-fire.jpg)",
        "url(https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);
    counter++;
}
setInterval(changeBG, 12000);



$("#add-comment").on('click', function(){
    if(clicked)
    {
        clicked=false;
       $(".form-toggle").slideUp( 1100, function() {
       });
    }
    else
    {
        clicked=true;
       $(".form-toggle").slideDown( 1100, function() {
    // Animation complete.
  });
    }
});



//slide effects thumbnails
$(window).bind("load", function() {
  $("#content-title").delay(300).slideDown( 1100, function() {
    // Animation complete.
  });
});


//slide effects flash

$(window).bind("load", function(e) {
   
    getAlert1.delay(3000).slideUp(1000);
    e.stopPropagation();
});

$(window).bind("load", function(e) {

getAlert2.delay(3000).slideUp(1000);
e.stopPropagation();
});  




   

