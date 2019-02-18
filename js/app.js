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
  /*temporary stoarge for cards in a turn*/
  let tempCards=[];

  /*Allows for the cards to be flipped
  and then stored into a temporary variable for later comparsions*/
/*  $('.grid-container').on('click',"div",function(){
    $(this).addClass('card-flip');
    tempCards.push(this);
    //console.log(tempCards);
  })*/
  //console.log(cards);
  /*Logic for a turn: a turn is occuringing while the array tempCards is less than length 2*/
  /*Use a while loop that */
  while (tempCards.length<2){
    $('.grid-container').on('click',"div",function(){
      $(this).addClass('card-flip');
      tempCards.push(this);
      //console.log(tempCards);
    })
  }
    console.log(tempCards);
  });
