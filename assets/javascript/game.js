$(document).ready(function() {

var counter = 0;
var wins = 0;
var losses = 0;
var imgSrc = ['assets/images/garnet.png', 'assets/images/amethyst.png', 'assets/images/pearl.png', 'assets/images/ruby.png'];
var gifArray = ['https://media.giphy.com/media/VkPaYWleJugmc/giphy.gif', 'https://media.giphy.com/media/ETicwJxFobLLq/giphy.gif', 'https://media.giphy.com/media/qU64U6iHxnPfq/giphy.gif', 'https://media.giphy.com/media/8rJ1wPuzog1P2/giphy.gif'];

targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);

function crystalRandomValues() {
  return Math.floor(Math.random()*12)+1;
};

for (var i = 0; i < imgSrc.length; i++) {
  var gemPic = $("<img>");
  gemPic.addClass("gem-pic");
  gemPic.attr("src", imgSrc[i]);
  gemPic.attr("data-crystalvalue", crystalRandomValues());
  $("#gemDiv").append(gemPic);
}

function reset() {
  $('#number-to-guess').html(" ");
  targetNumber = Math.floor(Math.random() * 120) + 19;
  $("#number-to-guess").text(targetNumber);
  counter=0;
  var gemDivChildren = $("#gemDiv").children();
  for (var i = 0; i < gemDivChildren.length; i++){
  	$(gemDivChildren[i]).attr("data-crystalvalue", crystalRandomValues());
  }
}

$(".gem-pic").on("click", function() {
  $("#win-gif").html("");
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
    if (counter == targetNumber) {
    var j = Math.floor(Math.random()*4);
    var winGif = $("<img>");
    winGif.attr("src", gifArray[j]);
    $("#win-gif").text("Congratulations, you win!  Click on any Crystal Gem to start a new game or you can just enjoy this gif for a while.")
    $("#win-gif").append(winGif);
    wins ++;
    reset();
  }
  else if (counter > targetNumber) {
    alert("You lose!!");
    losses ++;
    reset();
  }
  $("#scoreDiv").html("<span>Your current score is:  </span>" + counter);
  $("#wins").html("<span>Wins:  </span>" + wins);
  $("#losses").html("<span>Losses:  </span>" + losses);
});
});
