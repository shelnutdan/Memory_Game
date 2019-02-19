$(document).ready(function(){
  /*Constructing randomized grid and placing it on the DOM*/
  console.log('javascript is running?');
  let appendArray = $('.grid-container');
  let cardArray=appendArray.children();
  console.log(cardArray);

  /*Start game function*/
  $(function() {

    console.log(cardArray);
        /*Shuffling function for the array of the cardArray*/
        /*shuffle function taken from https://jsfiddle.net/C6LPY/2*/
    while (cardArray.length>0) {
          appendArray.append(cardArray.splice(Math.floor(Math.random() * cardArray.length)));
      }

  }());

  $('.start').on('click',function(){
    console.log("Okay we are starting");
    //startGame();
  })
  let matchCards=[];
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


  /*comparsions function*/



  function compareCard(){
    if (tempCards[0].isEqualNode(tempCards[1])){
      matchCards.push(tempCards[0]);
      matchCards.push(tempCards[1]);
      tempCards[0].classList.add('card-match');
      tempCards[1].classList.add('card-match');
      console.log(matchCards);
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
let tempCards=[];
function cardClicks(){


   let count=0;
  $('.grid-container').on('click',"div",function(){

    $(this).addClass('card-flip');
    tempCards.push(this);
    count+=1;
    //console.log(count);
    if (count==2){
      //console.log(tempCards)
      compareCard()
      let tempCards=[];
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

    cardClicks();

    //console.log(tempCards);
  });
