
// A $( document ).ready() block.
$(document).ready(function() {

  $(".submit").click(function() {
    var guess = $("#guess").val();
    var guessNum = parseFloat(guess);

    if (guessNum == 5) {
      $(".answer").text("Only a 5?");
    } else if (guessNum <= 4 ) {
      $(".answer").text("That is low..");
    } else {
      $(".answer").text("Thank you!");
    }

    $(".submit").hide();
  });
});