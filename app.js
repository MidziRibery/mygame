

const squares = document.querySelectorAll('.square'); //select all the squares so can manipulate
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#score');
const start = document.querySelector('#btn-start');
const next = document.getElementById("btn-next");
const restart = document.getElementById("btn-restart");


let result = 0;
let hitPosition1;
let hitPosition2;
let hitPosition3;
let currentTime = 5 // change here for timer speed.
let timerId1 = null;
let timerId2 = null;
let timerId3 = null;
let countDownTimerId = null;
next.style.display = "none";
restart.style.display = "none";

/***********
 * Sequence of Events
 **********/
const seqOfEv = () => {
    hideStart();
    startTimer();
    moveMole1();
    mouseClick1();
    moveMole2();
    mouseClick2();
    moveMole3();
    mouseClick3();
}


/***********
 * Start button
 **********/
const startNow = () => {
    start.addEventListener('click', () => {
        console.log('start pressed')
        seqOfEv();
    })
}

startNow();

/***********
 * Restart button
 **********/
 const restartNow = () => {
    restart.addEventListener('click', () => {
        console.log('restart pressed')
        startTimer();
        moveMole1();
        mouseClick1();
        moveMole2();
        mouseClick2();
        moveMole3();
        mouseClick3();
    })
}



/***********
 * Hide start button
 **********/
 const hideStart = () => {
    if (start.style.display === "none") {
      start.style.display = "block";
    } else {
      start.style.display = "none";
    }
  }

/***********
 * Next button
 **********/
const nextGame = () => {
    if (next.style.display === "none") {
      next.style.display = "block";
    } else {
      next.style.display = "none";
    }
  }

/***********
 * Restart button
 **********/
 const restartGame = () => {
    if (restart.style.display === "none") {
        restart.style.display = "block";
    } else {
        restart.style.display = "none";
    }
    restartNow();
  };

/***********
 * Correct number //once click, alert 'correct!' timer stops, unhide next button
 **********/

const randomSquare1 = () => {
    squares.forEach(square => {
        square.classList.remove('num1') //clean slate
    })

    let randomSquare1 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare1.classList.add('num1'); //add class of mole to a random square

    hitPosition1 = randomSquare1.id; //to assign id to the mole that appears
}
const mouseClick1 = () =>{
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition1) {
            alert('You are awesome! 5 + 5 = 10!');
            alert('Click Next Level!');
            console.log('button 1')
            result++;
            score.textContent = result;
            nextGame()
            clearInterval(countDownTimerId);
            clearInterval(timerId1);
            clearInterval(timerId2);
            clearInterval(timerId3);
            cleanSlate1();
            cleanSlate2();
            cleanSlate3(); 
        }
    })
})
}

const moveMole1 = () => {  //later we add button to start.
    timerId1 = setInterval(randomSquare1, 1000); //move the mole randomly at an interval
}



/***********
 * Second number
 **********/

const randomSquare2 = () => {
    squares.forEach(square => {
        square.classList.remove('num2') //clean slate
    })

    let randomSquare2 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare2.classList.add('num2'); //add class of mole to a random square

    hitPosition2 = randomSquare2.id;
}

const mouseClick2 = () =>{
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition2) {
                alert('Oops Try Again!');
                console.log('button 2')
                result++;
                score.textContent = result;
            }
        })
    })
    }

const moveMole2 = () => {  //later we add button to start.
    timerId2 = setInterval(randomSquare2, 1050); //move the mole randomly at an interval
}

// moveMole2();
// mouseClick2();

/***********
 * Third number
 **********/

 const randomSquare3 = () => {
    squares.forEach(square => {
        square.classList.remove('num3') //clean slate
    })

    let randomSquare3 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare3.classList.add('num3'); //add class of mole to a random square

    hitPosition3 = randomSquare3.id;
}

const mouseClick3 = () =>{// should be inside some function
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition3) {
                alert('Oops Try Again! Don\'t give up!');
                console.log('button 3')
                result++;
                score.textContent = result;
            }
        })
    })
    }

const moveMole3 = () => {  //later we add button to start.
    timerId3 = setInterval(randomSquare3, 1500); //move the mole randomly at an interval
}

// moveMole2();
// mouseClick2();

/***********
 * Clear Grid
 **********/

const cleanSlate1 = () => {
    squares.forEach(square => {
        square.classList.remove('num1')  //clean slate
    })
}

const cleanSlate2 = () => {
    squares.forEach(square => {
        square.classList.remove('num2')  //clean slate
    })
}

const cleanSlate3 = () => {
    squares.forEach(square => {
        square.classList.remove('num3')  //clean slate
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
        clearInterval(timerId3);    
        alert('Game Over! Don\'t give up! Click restart to try again!');
        restartGame();
        cleanSlate1();
        cleanSlate2();
        cleanSlate3();     
        //to unhide a restart button and hide start
    }
}

const startTimer = () => {
    countDownTimerId = setInterval(countDown, 1000);
}






