$(document).ready(function(){
  /*Constructing randomized grid and placing it on the DOM*/
  console.log('javascript is running?');
  let appendArray = $('.grid-container');
  let cardArray=appendArray.children();
  console.log(cardArray);

  /*Start game function*/
  function shuffleGrid() {

    console.log(cardArray);
        /*Shuffling function for the array of the cardArray*/
        /*shuffle function taken from https://jsfiddle.net/C6LPY/2*/
    while (cardArray.length>0) {
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
    shuffleGrid()
    startGame();
  })
  //let matchCards=[];
  /*function startGame(){
    while(matchCards.length<16){

    } console.log('game is over!')

  }

  */

  /*shuffle grid function*/
  /*Turn function*/
  /*
  function turnFunction(){
    while (matchCards.length!=16){
      let round=0;
      cardClicks();

  }

}
Start game function*/
function startGame(){
  shuffleGrid();



  let timeStart=Date.now();
  cardClicks();


}
/*resetButton

/* endGame function*/
function endGame(){
let timeEnd=Date.now;
let total= timeEnd=timeStart;
console.log(timeStart);
console.log(timeEnd);
console.log(total)
  alert('Congrats you have won!');
}

  /*comparsions function*/
function matchCards(){
   firstCard.addClass('card-match')
   secondCard.addClass('card-match')
   console.log(firstCard)
   console.log(secondCard)
   matchCard.push(firstCard,secondCard)
   console.log(matchCard.length);
}
/*reset card function*/
function resetCards(){
  firstCard.removeClass('card-flip');
  secondCard.removeClass('card-flip');
  firstCard='';
  secondCard='';
  count=0;
}
/*  obsoluete function

function compareCard(){
    if (tempCards[0].isEqualNode(tempCards[1])){
      matchCards.push(tempCards[0]);
      matchCards.push(tempCards[1]);
      tempCards[0].classList.add('card-match');
      tempCards[1].classList.add('card-match');
      console.log(matchCards.length);
      //delete tempCards[0];
      //delete tempCards[1];
      console.log(tempCards);
  }else{
    tempCards[0].classList.remove('card-flip')
    tempCards[1].classList.remove('card-flip');
    //delete tempCards[0];
    //delete tempCards[1];
  }
}

*/


  /*reset function*/

  /*add listener event that flips over card*/
  /*document.getElementsByClassName('.card').addEventListener('click', function(){
      document.getElementsByClassName('.card').css({"background-color":"green"});
    },false
  );*/
  /*temporary stoarge for cards in a turn*/
  //let tempCards=[];

  /*Allows for the cards to be flipped
  and then stored into a temporary variable for later comparsions*/
/*  $('.grid-container').on('click',"div",function(){
    $(this).addClass('card-flip');
    tempCards.push(this);
    //console.log(tempCards);
  })*/
  //console.log(cards);
  /*Logic for a turn: a turn is occuring while the array tempCards is less than length 2*/
  /*Use a while loop that */

 /* Card flipping functionality*/
/*let tempCards=[];
let count=0;
let turnCounter=0;
let firstCard="";
let secondCard="";
let currentSelection=null;
let matchCard=[];*/
let count=0;
let turnCounter=0;
let firstCard="";
let secondCard="";
let matchCard=[];
function cardClicks(){
  


  let currentSelection=null;

  $('.grid-container').on('click',"div",function(){

    //$(this).addClass('card-flip');
    //firstCard=$(this).text();
    //console.log(firstCard);
    //let secondcard="";
    //console.log(count);
    /*if ($(this)==currentSelection){
      return;
    }*/

    if (count<2){
      count+=1;
      $(this).addClass('card-flip')

      if (count ==1){
        //firstCard=$(this).dataset.id;

        firstCard=$(this)
        currentSelection=firstCard;
        console.log(currentSelection)
      } else{
        secondCard=$(this)
      }
       if (!$(this).hasClass('card-flip')){
        //secondCard=$(this).dataset.id;
        //$(this).addClass('card-flip')
        //secondCard=$(this)
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

    }
    //console.log(tempCards);
    /*Place logic for determine if cards match */
  })
}


 /*
    $('.grid-container').on('click',"div",function(){

      $(this).addClass('card-flip');
      tempCards.push(this);
      count+=1;
      //console.log(count);
      if (count===2){
        compareCard()

      }
    })
    */
      //console.log(tempCards);
      /*Place logic for determine if cards match */

    //cardClicks();

    //console.log(tempCards);
  });
