/*Initialization */
let MatchGame={};
let count=0;
let matchCount=0;
let minutes = 0;
let time;


/*Timer function that is started when a new game is started*/
function changeTime(){
  document.getElementById('timeDisplay').innerHTML=++seconds;
}
function startTime(){
  stop()
  seconds=0;
  time=setInterval(changeTime,1000);
}
let stop=function(){
  clearInterval(time);
}

/*Functionality to the start button that starts the game with a new game grid, starts move counter,
timer function, and starts recording of star rating*/
$(document).ready(function(){
  let $gameGrid = $('.grid-container');

  document.getElementById('timeDisplay').innerHTML= 0;

  $('.start').one('click',function(){


    startTime();
    /*Display initial values for moves and star rating*/
    document.getElementById('movesDisplay').innerHTML=count
    document.getElementById('stars').innerHTML="&#9733;&#9733;&#9733;&#9733;"
    let cardNumbers=MatchGame.createCardNumbers()

    MatchGame.createCards(cardNumbers,$gameGrid);
    console.log(matchCount)

  })
})


/*rating system that changes as the user completes more moves throughout the game*/
function rating(moves){
  if (50<moves ){
  //document.getElementById('stars').innerHTML='&#9733;';
  return '&#9733;'
}
  else if (35<moves){
  //document.getElementById('stars').innerHTML='&#9733;&#9733;'
  return '&#9733;&#9733;'
}
  else if (20< moves){
  //document.getElementById('stars').innerHTML="&#9733;&#9733;&#9733;"
  return "&#9733;&#9733;&#9733;"
}
  else{
  //document.getElementById('stars').innerHTML="&#9733;&#9733;&#9733;&#9733;"
  return "&#9733;&#9733;&#9733;&#9733;"
}

}
/*Reset button that resets with a new game board, timer, move counter, and star rating*/
$(document).ready(function(){
  $('.reset').on('click',function(){
    $("#endDisplay").modal('hide')

    count=0
    seconds = 0;
    startTime()

    let $gameGrid = $('.grid-container');
    document.getElementById('movesDisplay').innerHTML=count;
    document.getElementById('stars').innerHTML="&#9733;&#9733;&#9733;&#9733;"
    let cardNumbers=MatchGame.createCardNumbers()

    MatchGame.createCards(cardNumbers,$gameGrid);
    console.log(matchCount)

  })

})

/*Generates array of match card numbers that will be uiused later for comparsions*/
function endGame(){
  seconds = 0;
  minutes = 0;
  matchCount=0;
  count=0;
  $(document).ready(function(){
    /*Shows end game display to player and details their performance*/
    $("#endDisplay").modal('show');

    $('.container').css({'display':"none"})
    //clearTimeout(time)
    /*play again button functionality that is similiar to the rest and start buttons*/
    $('.btn-primary').on('click', function(){
      startTime()
      let count=0;
      $("#endDisplay").modal('hide')
      document.getElementById('movesDisplay').innerHTML=count
      document.getElementById('stars').innerHTML="&#9733;&#9733;&#9733;&#9733;";

      let $gameGrid = $('.grid-container');

      $('.container').css({'display':'block'})
      let cardNumbers=MatchGame.createCardNumbers()

      MatchGame.createCards(cardNumbers,$gameGrid);
      //console.log(matchCount)

    });
  });
}

/*Create the card numbers that is used for comparsions later on*/
MatchGame.createCardNumbers=function(){
  let cardArray=[];
  for (let i=1;i<=8;i++){
    cardArray.push(i);
    cardArray.push(i);
  }

  let numberArray=[];
  /*Randomizes the card numbers into a array for when they eventually get turn into DOM objects*/
  while (cardArray.length != 0){
    let randomNum=Math.floor(Math.random() * cardArray.length);
    let cardValue=cardArray.splice(randomNum,1)[0]
    numberArray.push(cardValue);

  }
  return numberArray;
}

/*Takes the card numbers and converts into game objects*/
MatchGame.createCards= function(cardNumbers,$gameGrid){
/*have list of colors for the cards to take when flipped over*/
  let colors = [
    '#f2995a',
    '#f2e55a',
    '#a6f25a',
    '#5af2bf',
    '#5a8cf2',
    '#995af2',
    '#f25ad8',
    '#f25a5a']
  /*Empty out the game grid to */
  $gameGrid.empty()
  $gameGrid.data('flippedCards',[]);
  for (let i=0;i<cardNumbers.length;i++){
    let cardNum=cardNumbers[i];
    let color=colors[cardNum-1];
    let data={
      cardNum: cardNum,
      color:color,
      flipped: false
    };
    /*Places the card onto the DOM of the game grid*/
    let $cardElement=$("<div class='card'></div>");
    $cardElement.data(data);
    $gameGrid.append($cardElement);
  }
  /*Calls the card 'flipping' function that displays the cards up and handles matches or mismatches*/
  $('.card').click(function(){
    MatchGame.cardFlip($(this),$gameGrid);
  })
};

/*The card flip function*/
MatchGame.cardFlip= function($card,$game){
  /*Prevents double clicks on the same card*/
  let timeStart= Date.now()
  if ($card.data('flipped')){
    return
  }
/* Changes the card to its 'face-up' position*/
  $card.css('background-color', $card.data('color'))
      .text($card.data('cardNum'))
      .data('flipped', true);
  let cardsFlip=$game.data('flippedCards')
  cardsFlip.push($card);


  /*Limits card flips to 2*/
  if (cardsFlip.length === 2) {
    /*Set the matched cards to stay 'face-up'*/
    if (cardsFlip[0].data('cardNum') === cardsFlip[1].data('cardNum')) {
      let matched = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      cardsFlip[0].css(matched);
      cardsFlip[1].css(matched);
      count+=2;
      rating(count)
      matchCount+=2;
      //console.log(cardsFlip[0])
      //console.log(cardsFlip[1])
      document.getElementById('movesDisplay').innerHTML=count;
      document.getElementById('stars').innerHTML=rating(count)
      //console.log(count);
      //console.log(matchCount)
      /* Set cards that don't match back to 'face-down'*/
    } else {
      let firstCard = cardsFlip[0];
      var secondCard= cardsFlip[1];
      count+=2;
      rating(count)
      document.getElementById('movesDisplay').innerHTML=count
      document.getElementById('stars').innerHTML=rating(count)
      //console.log(count);
      window.setTimeout(function() {
        firstCard.css('background-color', '#FFF')
            .text('')
            .data('flipped', false);
        secondCard.css('background-color', '#FFF')
            .text('')
            .data('flipped', false);
      }, 350);
    }
    $game.data('flippedCards', []);
    /*End game condition that will stop the game once all the cards have been matched up. Also sets the final display
    elements detailing the players performance*/
    if (matchCount==16){
      let finalTime=document.getElementById('timeDisplay').innerHTML;
      console.log(finalTime)
      document.getElementById('finalTime').innerHTML=finalTime
      document.getElementById('finalMoves').innerHTML=count
      document.getElementById('finalRating').innerHTML=rating(count)
      /*stops timmer*/
      stop()
      clearTimeout(time)
      /*Dispalys endgame options*/
      endGame();
    }
  }
}
