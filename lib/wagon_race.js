// TODO: write your code here
const wagonOne = document.querySelectorAll("#player1-race td");
let counter = 0;
document.addEventListener("keyup", (event) => {
  // Do something (callback)
  if (event.key === "q") {
    console.log(event);
    console.log(event.currentTarget);
    wagonOne[counter].classList.remove("active");
    wagonOne[counter + 1].classList.add("active");
    counter += 1;
    if (counter === wagonOne.length - 1) {
      alert("Player 1 won!");
      window.location.reload();
    }
  }
});
let counter2 = 0;
const wagonTwo = document.querySelectorAll("#player2-race td");
document.addEventListener("keyup", (event) => {
  // Do something (callback)
  if (event.key === "p") {
    console.log(event);
    console.log(event.currentTarget);
    wagonTwo[counter2].classList.remove("active");
    wagonTwo[counter2 + 1].classList.add("active");
    counter2 += 1;
    if (counter2 === wagonTwo.length - 1) {
      alert("Player 2 won!");
      window.location.reload();
    }
  }
});
