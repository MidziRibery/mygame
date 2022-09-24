

const squares = document.querySelectorAll('.square'); //select all the squares so can manipulate
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#score');
const start = document.querySelector('#btn-start');

let result = 0;
let hitPosition1;
let hitPosition2;
let currentTime = 20 // change here for timer speed.
let timerId1 = null;
let timerId2 = null;
let countDownTimerId = null;

/***********
 * Start
 **********/
const startNow = () => {
    start.addEventListener('click', () => {
        console.log('start pressed')
        startTimer();
        moveMole1();
        mouseClick1();
        moveMole2();
        mouseClick2();
    })
}

startNow();

/***********
 * First mole
 **********/

const randomSquare1 = () => {
    squares.forEach(square => {
        square.classList.remove('mole1') //clean slate
    })

    let randomSquare1 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare1.classList.add('mole1'); //add class of mole to a random square

    hitPosition1 = randomSquare1.id; //to assign id to the mole that appears
}
const mouseClick1 = () =>{// should be inside some function
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition1) {
            console.log('button 1')
            result++;
            score.textContent = result;
        }
    })
})
}

const moveMole1 = () => {  //later we add button to start.
    timerId1 = setInterval(randomSquare1, 1000); //move the mole randomly at an interval
}



/***********
 * Second mole
 **********/

const randomSquare2 = () => {
    squares.forEach(square => {
        square.classList.remove('mole2') //clean slate
    })

    let randomSquare2 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare2.classList.add('mole2'); //add class of mole to a random square

    hitPosition2 = randomSquare2.id;
}

const mouseClick2 = () =>{// should be inside some function
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition2) {
                console.log('button 2')
                result++;
                score.textContent = result;
            }
        })
    })
    }

const moveMole2 = () => {  //later we add button to start.
    timerId2 = setInterval(randomSquare2, 1000); //move the mole randomly at an interval
}

// moveMole2();
// mouseClick2();

const cleanSlate1 = () => {
    squares.forEach(square => {
        square.classList.remove('mole1')  //clean slate
    })
}

const cleanSlate2 = () => {
    squares.forEach(square => {
        square.classList.remove('mole2')  //clean slate
    })
}


/***********
 * Countdown Timer
 **********/

const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId1);
        clearInterval(timerId2);  
        alert('Game Over! Your final score is ' + result );
        cleanSlate1();
        cleanSlate2();     
    }
}

const startTimer = () => {
    countDownTimerId = setInterval(countDown, 1000);
}






