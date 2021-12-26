// buttons
let biggerBtn = document.getElementById("bigger");
let smallerBtn = document.getElementById("smaller");
let equalBtn = document.getElementById("equal");
let nextBtn = document.getElementById("next");
let resetBtn = document.getElementById("reset");

// labels
let healthLabel = document.getElementById("healthLabel");

let scoreLabel = document.getElementById("scoreLabel");

let currentLabel = document.getElementById("currentLabel");
let currentNum = document.getElementById("currentNum");

let nextLabel = document.getElementById("nextLabel");
let nextNum = document.getElementById("nextNum");

// math
let clicked = false;
let healthClicked = false;
let healthNumber = 3;
let scoreNumber = 0;
let currentNumber = Math.floor(Math.random() * 11);
let nextNumber = Math.floor(Math.random() * 11);
let streak = 0;

// set
nextBtn.disabled = true;
currentNum.innerHTML = parseInt(currentNumber);

// eventListener
biggerBtn.addEventListener("click", function () {
  if (currentNumber > nextNumber) {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "green";
    if (clicked === false) {
      scoreLabel.innerHTML = parseInt((scoreNumber += 5));
      streak++;
      clicked = true;
      healthClicked = true;
    }
  } else {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "red";
    streak = 0;
    if (clicked === false) {
      healthNumber--;
      healthLabel.innerHTML = parseInt(healthNumber);
      clicked = true;
    }
  }
  smallerBtn.disabled = true;
  equalBtn.disabled = true;
  nextBtn.disabled = false;
  check();
});

smallerBtn.addEventListener("click", function () {
  if (currentNumber < nextNumber) {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "green";
    if (clicked === false) {
      scoreLabel.innerHTML = parseInt((scoreNumber += 5));
      streak++;
      clicked = true;
      healthClicked = true;
    }
  } else {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "red";
    streak = 0;
    if (clicked === false) {
      healthNumber--;
      healthLabel.innerHTML = parseInt(healthNumber);
      clicked = true;
    }
  }
  biggerBtn.disabled = true;
  equalBtn.disabled = true;
  nextBtn.disabled = false;
  check();
});

equalBtn.addEventListener("click", function () {
  if (currentNumber === nextNumber) {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "green";
    if (clicked === false) {
      scoreLabel.innerHTML = parseInt((scoreNumber += 10));
      streak++;
      clicked = true;
      healthClicked = true;
    }
  } else {
    nextNum.innerHTML = parseInt(nextNumber);
    nextLabel.style.backgroundColor = "red";
    streak = 0;
    if (clicked === false) {
      healthNumber--;
      healthLabel.innerHTML = parseInt(healthNumber);
      clicked = true;
    }
  }
  biggerBtn.disabled = true;
  smallerBtn.disabled = true;
  nextBtn.disabled = false;
  check();
});

nextBtn.addEventListener("click", function () {
  nextLabel.style.backgroundColor = "whitesmoke";

  currentNumber = nextNumber;
  currentNum.innerHTML = parseInt(currentNumber);

  nextNumber = Math.floor(Math.random() * 11);
  nextNum.innerHTML = "?";

  clicked = false;
  biggerBtn.disabled = false;
  smallerBtn.disabled = false;
  equalBtn.disabled = false;
  nextBtn.disabled = true;
});

resetBtn.addEventListener("click", function () {
  if (confirm("You're about to reset the game!") === true) {
    nextLabel.style.backgroundColor = "whitesmoke";

    currentNumber = Math.floor(Math.random() * 11);
    currentNum.innerHTML = parseInt(currentNumber);

    nextNumber = Math.floor(Math.random() * 11);
    nextNum.innerHTML = "?";

    scoreNumber = 0;
    scoreLabel.innerHTML = parseInt(scoreNumber);

    healthNumber = 3;
    healthLabel.innerHTML = parseInt(healthNumber);

    scoreNumber = 0;
    scoreLabel.innerHTML = parseInt(scoreNumber);

    clicked = false;
    biggerBtn.disabled = false;
    smallerBtn.disabled = false;
    equalBtn.disabled = false;
    nextBtn.disabled = true;
  }
});

// function
function check() {
  if (healthNumber === 0) {
    clicked = false;
    biggerBtn.disabled = true;
    smallerBtn.disabled = true;
    equalBtn.disabled = true;
    nextBtn.disabled = true;
    resetBtn.disabled = false;
  }

  if (streak === 3 && healthClicked === true) {
    healthNumber++;
    healthClicked = false;
  }

  if (streak === 6 && healthClicked === true) {
    healthNumber = healthNumber + 2;
    healthClicked = false;
  }

  healthLabel.innerHTML = healthNumber;
}
