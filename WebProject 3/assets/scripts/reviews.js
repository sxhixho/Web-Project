$("#currentYear").html(new Date().getFullYear());

$("#hideBtn1").click(function() {
    $("div #paragraph1").hide(1000);
});

$("#showBtn1").click(function(){
  $("div #paragraph1").show(1000);
})

$("#hideBtn2").click(function() {
    $("div #paragraph2").hide(1000);
});

$("#showBtn2").click(function(){
  $("div #paragraph2").show(1000);
})

$("#hideBtn3").click(function() {
    $("div #reviewText").hide(1000);
});

$("#showBtn3").click(function(){
  $("div #reviewText").show(1000);
})

$("#submitBtn").click(function(){
  event.preventDefault();

  //validating the inputs
  if($("#username").val()===("") || $("#comment").val()===("")){
    alert("Required field missing!");
    return;
   }

   if($("#username").val().length < 3){
     alert("Name must be at least 3 characters long!");
     return;
   }

   if($("#comment").val().length < 5){
     alert("Description must be at least 5 characters long!");
     return;
   }
  

  //if the inputs are correct, show the review
 else{
  $("#nameHeader").html($("#username").val());
  $("#ratingHeader").html($("#rating").val()+"/5");
  $("#reviewText").html($("#comment").val());

  $("#hideBtn3").show();
  $("#showBtn3").show();

  $("#reviewForm").trigger("reset"); //to clear the form after the submit button is pressed
  }
  
 });