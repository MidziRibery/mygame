

const squares = document.querySelectorAll('.square'); //select all the squares so can manipulate
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#score');
const start = document.querySelector('#btn-start');
var x = document.getElementById("myDIV");
x.style.display = "none";

let result = 0;
let hitPosition1;
let hitPosition2;
let hitPosition3;
let currentTime = 20 // change here for timer speed.
let timerId1 = null;
let timerId2 = null;
let timerId3 = null;
let countDownTimerId = null;

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

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
        moveMole3();
        mouseClick3();
    })
}

startNow();

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
            myFunction()
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
        cleanSlate1();
        cleanSlate2();
        cleanSlate3();     
    }
}

const startTimer = () => {
    countDownTimerId = setInterval(countDown, 1000);
}






