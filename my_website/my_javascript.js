$(document).ready(function(){
  $("#question-one-question").click(function(){
    $("#question-one-solution").slideDown(); // first do show();
  });
  $("#question-two-question").click(function(){
    $("#question-two-solution").slideDown(); // first do show();
  });

  $('#quotes').quovolver();

  $("#lightSlider").lightSlider({
    rtl:true
  }); 

});