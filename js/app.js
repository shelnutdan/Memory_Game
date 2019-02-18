$(document).ready(function(){
  /*Constructing randomized grid and placing it on the DOM*/
  console.log('javascript is running?');
  let appendArray = $('.grid-container');
  let cardArray=appendArray.children();
  console.log(cardArray);
  $(function() {

    console.log(cardArray);
    /*Shuffling function for the array of the cardArray*/
    /*shuffle function taken from https://jsfiddle.net/C6LPY/2*/
    while (cardArray.length) {
          appendArray.append(cardArray.splice(Math.floor(Math.random() * cardArray.length)));
      }

  }());

  /*add listener event that flips over card*/
  /*document.getElementsByClassName('.card').addEventListener('click', function(){
      document.getElementsByClassName('.card').css({"background-color":"green"});
    },false
  );*/
  $('#card1A').click(function(){
    $('#card1A').addClass('card-flip')
  })
  console.log(cards);

  });
