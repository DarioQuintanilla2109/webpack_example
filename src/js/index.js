
window.onload = () => {
  //document.querySelector('.number').innerHTML = (generateRandomNumber());
  generateRandomCard();
};

    
let generateRandomCard = () => {
  //arrays for suits 
  var suitsTop = [
    "hearts",
    "spades",
    "diamond",
    "clubs"
 ];
 var suitsBottom = [
    "hearts",
    "spades",
    "diams",
    "clubs"
 ];
 //array for number/value
 var ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

 //since we want the same value for both suits, the random index returned gets assigned to both
 var suitIndex = Math.floor(Math.random() * suitsBottom.length)
   var suit = [
      suitsBottom[suitIndex],
      suitsTop[suitIndex]
   ];
   //value of card
   var rankIndex = Math.floor(Math.random() * ranks.length);
   var rank = [
      ranks[rankIndex],
      
   ];
  //creating our HTML dynamically
   document.querySelector(".card").innerHTML += 
   
   "<span class='top-corner'>&" + suit[1] + 
   ";</span> <div class='card" + rank[0] + " " + 
   suit[0] + "'><span class='.top-corner'>" + rank[0] + 
   "</span><span class='bottom-corner'>&" + suit[1] + 
   ";</span></div>";


};



