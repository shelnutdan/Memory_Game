
let MatchGame={};
let count=0;
let matchCount=0;
/* Timer function*/
/* Utilized code from daniel hug link:https://jsfiddle.net/Daniel_Hug/pvk6p/
and the provide linkhttp://jsfiddle.net/6nDYd/10/
*/
let seconds = 0;
let minutes = 0;
let time;

/*Stack overflow*/
function changeTime(){
  document.getElementById('timeDisplay').innerHTML=++value;
}
function startTime(){
  stop()
  value=0;
  time=setInterval(changeTime,1000);
}
let stop=function(){
  clearInterval(time);
}
/*
function addTime() {
  setInterval(function(){
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;

        }
    }
    time=(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds)
    document.getElementById('timeDisplay').innerHTML=  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  },1000);
}*/

/*

timer();

function timer() {
time = setTimeout(add, 1000);
}*/

$(document).ready(function(){
  let $gameGrid = $('.grid-container');

  document.getElementById('timeDisplay').innerHTML=  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  $('.start').one('click',function(){


    startTime();
    document.getElementById('movesDisplay').innerHTML=count
    document.getElementById('stars').innerHTML="Four Stars"
    let cardNumbers=MatchGame.createCardNumbers()

    MatchGame.createCards(cardNumbers,$gameGrid);
    console.log(matchCount)

  })
})
  //console.log(Object.keys(MatchGame).length)
  /*Generates array of match card numbers that will be uiused later for comparsions*/
  //let cardNumbers=MatchGame.createCardNumbers()
  //console.log(cardNumbers)
  //MatchGame.createCards(cardNumbers,$gameGrid);
  /*$(function(){

/*
time function taken from W3school link: https://www.w3schools.com/jsref/met_win_setinterval.asp*/
/*
function myTimer() {

  let startTime = new Date();
  let timeString = startTime.toLocaleTimeString();
  document.getElementById('timeDisplay').innerHTML = timeString;
}


/* Start button
resetButton
rating system
*/
/*rating system*/
function rating(moves){
  if (50<moves ){
  document.getElementById('stars').innerHTML="One Stars"}
  else if (35<moves){
  document.getElementById('stars').innerHTML="Two Stars"}
  else if (20< moves){
  document.getElementById('stars').innerHTML="Three Stars"}
  else{
  document.getElementById('stars').innerHTML="Four Stars"}
}


/*Reset button*/
$(document).ready(function(){
  $('.reset').on('click',function(){
    $("#myModal").modal('hide')

    //clearTimeout(addTime(),0)
    //let time =setInterval(myTimer,100)
    seconds = 0;
    minutes = 0;
    //time=0;
    startTime()
    //addTime();
    let $gameGrid = $('.grid-container');
    document.getElementById('movesDisplay').innerHTML=count;
    document.getElementById('stars').innerHTML="Four Stars"
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
    $("#myModal").modal('show');

    $('.container').css({'display':"none"})
    //clearTimeout(time)
    $('.btn-primary').on('click', function(){
      startTime()
      let count=0;
      $("#myModal").modal('hide')
      document.getElementById('movesDisplay').innerHTML=count
      document.getElementById('stars').innerHTML="Four Stars"
      //addTime();
      let $gameGrid = $('.grid-container');

      $('.container').css({'display':'block'})
      let cardNumbers=MatchGame.createCardNumbers()

      MatchGame.createCards(cardNumbers,$gameGrid);
      console.log(matchCount)

    });
  });
}


MatchGame.createCardNumbers=function(){
  let cardArray=[];
  for (let i=1;i<=8;i++){
    cardArray.push(i);
    cardArray.push(i);
  }

  let numberArray=[];
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
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)']
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
    let $cardElement=$("<div class='card'></div>");
    $cardElement.data(data);
    $gameGrid.append($cardElement);
  }
  $('.card').click(function(){
    MatchGame.cardFlip($(this),$gameGrid);
  })
};


MatchGame.cardFlip= function($card,$game){
  /*Prevents double clicks on the same card*/

  let timeStart= Date.now()
  if ($card.data('flipped')){
    return
  }

  $card.css('background-color', $card.data('color'))
      .text($card.data('cardNum'))
      .data('flipped', true);
  let cardsFlip=$game.data('flippedCards')
  cardsFlip.push($card);



  if (cardsFlip.length === 2) {
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
      document.getElementById('movesDisplay').innerHTML=count
      //console.log(count);
      //console.log(matchCount)
    } else {
      let firstCard = cardsFlip[0];
      var secondCard= cardsFlip[1];
      count+=2;
      rating(count)
      document.getElementById('movesDisplay').innerHTML=count
      //console.log(count);
      window.setTimeout(function() {
        firstCard.css('background-color', 'white')
            .text('')
            .data('flipped', false);
        secondCard.css('background-color', 'white')
            .text('')
            .data('flipped', false);
      }, 350);
    }
    $game.data('flippedCards', []);
    if (matchCount==6){
      console.log(document.querySelector('#timeDisplay').innerHTML)
      stop()
      clearTimeout(time)

      endGame();
    }
  }
}


  /*Constructing randomized grid and placing it on the DOM*
  console.log('javascript is running?');
  let appendArray = $('.grid-container');
  let cardArray=appendArray.children();
  console.log(cardArray);

  /*Start game function*
  function shuffleGrid() {

    console.log(cardArray);
        /*Shuffling function for the array of the cardArray*
        /*shuffle function taken from https://jsfiddle.net/C6LPY/2*
    while (cardArray.length!=0) {
          appendArray.append(cardArray.splice(Math.floor(Math.random() * cardArray.length)));
      }

  };
  //shuffleGrid();

  $('.start').on('click',function(){
    console.log("Okay we are starting");
    shuffleGrid()
    startGame();
  })
  $('.reset').on('click',function(){
    console.log("Resetting the game");
    cardArray.empty();
    shuffleGrid()
    startGame();
  })
/*Start game function*
function startGame(){
  shuffleGrid();



  let timeStart=Date.now();
  cardClicks();


}
/*resetButton

/* endGame function*
function endGame(){

  setTimeout(alert('Congrats you have won!'),30000);
}

  /*comparsions function*
function matchCards(){
   firstCard.addClass('card-match')
   secondCard.addClass('card-match')
   console.log(firstCard)
   console.log(secondCard)
   matchCard.push(firstCard,secondCard)
   console.log(matchCard.length);
}
/*reset card function*
function resetCards(){
  firstCard.removeClass('card-flip');
  secondCard.removeClass('card-flip');
  firstCard='';
  secondCard='';
  count=0;
}




  /*reset function*/

  /*add listener event that flips over card*/
  /*document.getElementsByClassName('.card').addEventListener('click', function(){
      document.getElementsByClassName('.card').css({"background-color":"green"});
    },false

  /*temporary stoarge for cards in a turn*/


  /*Allows for the cards to be flipped
  and then stored into a temporary variable for later comparsions*/

  //console.log(cards);
  /*Logic for a turn: a turn is occuring while the array tempCards is less than length 2*/
  /*Use a while loop that */

 /* Card flipping functionality*

let count=0;
let turnCounter=0;
let firstCard="";
let secondCard="";
let matchCard=[];
function cardClicks(){


  $('.grid-container').on('click',"div",function(){



    if (count<2){
      count+=1;
      $(this).addClass('card-flip')

      if (count ==1){

        firstCard=$(this)
        currentSelection=firstCard;
        console.log(currentSelection)
      } else{
        secondCard=$(this)
      }
       if (!$(this).hasClass('card-flip')){

        return ;
      }

      if (count==2){
        if( firstCard.text()===secondCard.text()){
          console.log('Match');
          console.log(firstCard);
          console.log(secondCard);
          turnCounter+=1;
          setTimeout(matchCards(),100000);
          resetCards();
        }else{
          console.log('no match');
          console.log(firstCard);
          console.log(secondCard);
          turnCounter+=1;
          resetCards();

        }
      }
      //console.log(tempCards)
      if (matchCard.length===16){
        endGame();
      }
    }
    //console.log(tempCards);
    /*Place logic for determine if cards match */
/*  })

}
})*/
