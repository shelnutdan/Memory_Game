# Memory Game

## What is this Project?

This is simple memory game created for Udacit's Frontend Web Development Nanodegree program

## Objective
The point of the game is to match all the cards to their corresponding pairs. The fewer moves this is done the better the user's rating.
The rating goes from one to four stars.

## Live Demo

[Live Demo](http://strange-slip.surge.sh/)

## Features
**Timer**: Onces the game has been started, a timer will start for the player and stop once the game is complted. The timmer has no effect on the final rating for the user.

**Move Counter**: there is a move counter that displays to the user how many moves they have completed. a final move count will be displayed for the user once the game has been completed.

**Star Rating**: throughout the game a live game rating will display to the user. Where more moves will result in the players rating to decrease.

## How to play
If you want to play the game clone the repository [here](https://github.com/shelnutdan/Memory_Game.git)
## Instructions
- Click on the start button center to game grid
- Click on a card
- Continue to click on cards until have numbered cards have been matched up
- Once completed a performance review will display with final time, move count, and star rating
- The user will be given the opption to play again with reset values

## How the game was created
By using standard Javascript I manipulated the DOM to do the following:
- Created a set of randomized cards that are placed 'face down' on the game grid the either the start or reset buttons are clicked
- Utlized functons to count moves, track time, and player rating
- Translate user performance throughout the curse of a game
- Change the cards based on if they have matched up with their pairings
- Display a modal to the user details on their performance and give the user a option to play again
