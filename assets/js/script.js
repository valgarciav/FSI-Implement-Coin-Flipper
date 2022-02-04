// TODO: Declare any global variables we need
// add variable that we need
//heads, tails, totals
let totalCount = 0;
let headsCount = 0;
let tailsCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  // This is just a sanity check to make sure your JavaScript script is getting loaded
  // You can remove it once you see it in your browser console in the developer tools
  console.log("Hi");

  // DOM elements that are included in elements- can also use document.querySelector but it would have to be a string and use a #
  //Buttons
  let flipBtn = document.getElementById("flip");
  let clearBtn = document.getElementById("clear");
  // SCOREBOARD CELLS - dont use variable that have already been assigned in 4-6
  let headsCountData = document.getElementById("heads");
  let headsPercentData = document.getElementById("heads-percent");
  let tailsCountData = document.getElementById("tails");
  let tailsPercentData = document.getElementById("tails-percent");
  //IMG
  let pennyImg = document.getElementById("penny-img");
  //Message
  let message = document.getElementById("message");

  // TODO: Add event listener and handler for flip and clear buttons

  // Flip Button Click Handler
  flipBtn.addEventListener("click", function () {
    // TODO: Determine flip outcome - random but over time 50% for each- using Math.random
    // for math.random to return = 0-1 - will never be 0 or 1 . in the middle or in between
    totalCount++;
    let flippedHeads = Math.random() < 0.5;

    // add a condition if (check ) = what did they flip
    if (flippedHeads) {
      pennyImg.src = "./assets/images/penny-heads.jpg";
      message.textContent = "You flipped Heads!";
      headsCount++;
      totalCount++;
      headsCountData.textContent = headsCount;
    } else {
      pennyImh.src = "./assets/image/penny-tails.jpg";
      message.textContent = "You flipped Tails!";
      tailsCount++;
      tailsCountData.textContent = tailsCount;
    }
    // this will change every single time because each time you flip the total is part of it and the total will go up each time its flipped
    let headsPercentData = Math.round((headsCount / totalCount) * 100);
    let tailsPercentData = Math.round((tailsCount / totalCount) * 100);
    let headsPercentData.textContent = `${headsPercentage}%`
    let tailsPercentData.textContent = `${tailsPercentData}%`


    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell
  });

  // Clear Button Click Handler
  // TODO: Reset global variables to 0
  // TODO: Update the scoreboard (same logic as in flip button click handler)
});
