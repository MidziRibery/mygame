const squares = document.querySelectorAll('.square'); //select all the squares so can manipulate
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#score');
const start = document.querySelector('#btn-start');
const next = document.getElementById("btn-next");
const restart = document.getElementById("btn-restart");
const input1Num = document.getElementById("input1");
const input2Num = document.getElementById("input2");

let input1;
let input2;
let answer;
let result = 0;
let randomWrongNumbers = Math.floor(Math.random() * 10) + 1;
let randomWrongNumbers1 = Math.floor(Math.random() * 10)+ 1;
let hitPosition1;
let hitPosition2;
let hitPosition3;
let currentTime = 30 // change here for timer speed.
let timerId1 = null;
let timerId2 = null;
let timerId3 = null;
let countDownTimerId = null;
next.style.display = "none";
restart.style.display = "none";

console.log('Answer is:' + answer);
console.log('Wrong random number 1:' + randomWrongNumbers);//so how to check if randomw numbers === answer, rerun randon
console.log('Wrong random number 2:' + randomWrongNumbers1);

const reRun = () =>{
    randomWrongNumbers = Math.floor(Math.random() * 10);
    randomWrongNumbers1 = Math.floor(Math.random() * 10);
    console.log('Wrong random number 1:' + randomWrongNumbers);
    console.log('Wrong random number 2:' + randomWrongNumbers1);
}

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
 * Next button
 **********/
const nextGame = () => {
    next.addEventListener('click', () => {
        reRun();
        console.log('next clicked');
        generateQuestion();
        nextGameBtn()
        startTimer();
        moveMole1();
        mouseClick1();
        moveMole2();
        mouseClick2();
        moveMole3();
        mouseClick3();
       
    })
}

nextGame();


/***********
 * Restart button
 **********/
 const restartNow = () => {
    restart.addEventListener('click', () => {
        console.log('restart pressed')
        document.location.reload();
    })
}

/***********
 * Generate random question
 **********/
const generateQuestion = () =>{
    input1 = Math.ceil(Math.random() * 5);
    input1Num.textContent = input1;
    input2 = Math.floor(Math.random() * 6);
    input2Num.textContent = input2;
    answer = input1 + input2
    console.log(answer);
}
generateQuestion();

/***********
 * Generate random numbers
 **********/
    const numbersClass = [
        'num0',
        'num1',
        'num2',
        'num3',
        'num4',
        'num5',
        'num6',
        'num7',
        'num8',
        'num9',
        'num10'
    ];


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
 * Next button appearance
 **********/
const nextGameBtn = () => {
    if (next.style.display === "none") {
      next.style.display = "block";
    } else {
      next.style.display = "none";
    }
  }

/***********
 * Restart button appearance
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
        square.classList.remove(numbersClass[answer]); //clean slate
        // square.classList.remove(numbersClass[randomWrongNumbers1]);
        // square.classList.remove(numbersClass[randomWrongNumbers]); 
    })

    let randomSquare1 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    console.log(`Correct number will a`)  
    randomSquare1.classList.add(numbersClass[answer]); //add class of answer to a random square
    randomSquare1.classList.remove(numbersClass[randomWrongNumbers1]);
    randomSquare1.classList.remove(numbersClass[randomWrongNumbers]);

    hitPosition1 = randomSquare1.id; //to assign id to the mole that appears
}
const mouseClick1 = () =>{
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition1) {
            alert('You are awesome!');
            // alert('Click Next Level!');
            console.log('button 1')
            result++;
            score.textContent = result;
            nextGameBtn()
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
    timerId1 = setInterval(randomSquare1, 1300); //move the mole randomly at an interval
}



/***********
 * Second number
 **********/

const randomSquare2 = () => {

    squares.forEach(square => { //must be specific here, because randomWrong numbers below is diff from here.
        square.classList.remove(numbersClass[randomWrongNumbers]) //clean slate each cycle
        // square.classList.remove(numbersClass[answer-1]);
        // square.classList.remove(numbersClass[randomWrongNumbers1]); 
    })

    let randomSquare2 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare2.classList.add(numbersClass[randomWrongNumbers]); //add class of mole to a random square
    randomSquare2.classList.remove(numbersClass[randomWrongNumbers1])
    hitPosition2 = randomSquare2.id;
}

const mouseClick2 = () =>{
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition2) {
                alert('Oops Try Again!');
                console.log('button 2')
                // result++;
                // score.textContent = result;
            }
        })
    })
    }

const moveMole2 = () => {  //later we add button to start.
    timerId2 = setInterval(randomSquare2, 950); //move the mole randomly at an interval
}

// moveMole2();
// mouseClick2();

/***********
 * Third number
 **********/

 const randomSquare3 = () => {
    squares.forEach(square => {
        square.classList.remove(numbersClass[randomWrongNumbers1]) //clean slate
        // square.classList.remove(numbersClass[answer-1);
        // square.classList.remove(numbersClass[randomWrongNumbers]); 
    })

    let randomSquare3 = squares[Math.floor(Math.random() * 9)] // randomly choose a square on the grid
    randomSquare3.classList.add(numbersClass[randomWrongNumbers1]); //add class of mole to a random square
    randomSquare3.classList.remove(numbersClass[randomWrongNumbers])
    hitPosition3 = randomSquare3.id;
}

const mouseClick3 = () =>{// should be inside some function
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition3) {
                alert('Oops Try Again! Don\'t give up!');
                console.log('button 3')
                // result++;
                // score.textContent = result;
            }
        })
    })
    }

const moveMole3 = () => {  //later we add button to start.
    timerId3 = setInterval(randomSquare3, 970); //move the mole randomly at an interval
}

// moveMole2();
// mouseClick2();

/***********
 * Clear Grid
 **********/

const cleanSlate1 = () => {
    squares.forEach(square => {
        square.classList.remove(numbersClass[answer])  //clean slate
    })
}

const cleanSlate2 = () => {
    squares.forEach(square => {
        square.classList.remove(numbersClass[randomWrongNumbers])  //clean slate
    })
}

const cleanSlate3 = () => {
    squares.forEach(square => {
        square.classList.remove(numbersClass[randomWrongNumbers1])  //clean slate
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






