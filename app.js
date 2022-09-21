

const squares = document.querySelectorAll('.square'); //select all the squares so can manipulate
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#score');

let result = 0;
let hitPosition1;
let hitPosition2;
let currentTime = 20
let timerId = null;

/***********
 * First mole
 **********/

randomSquare1 = () => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare1 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare1.classList.add('mole'); //add class of mole to a random square

    hitPosition1 = randomSquare1.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition1) {
            result++;
            score.textContent = result;
        }
    })
})

moveMole1 = () => {  //later we add button to start.
    timerId = setInterval(randomSquare1, 500); //move the mole randomly at an interval
}

moveMole1();

/***********
 * Second mole
 **********/

randomSquare2 = () => {
    squares.forEach(square => {
        square.classList.remove('mole2') //clean slate
    })

    let randomSquare2 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare2.classList.add('mole2'); //add class of mole to a random square

    hitPosition2 = randomSquare2.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition2) {
            result++;
            score.textContent = result;
        }
    })
})

moveMole2 = () => {  //later we add button to start.
    timerId = setInterval(randomSquare2, 800); //move the mole randomly at an interval
}

moveMole2();

/***********
 * Countdown Timer
 **********/

countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)        
        alert('Game Over! Your final score is ' + result )
    }
}

let countDownTimerId = setInterval(countDown, 1000);

countDown();



