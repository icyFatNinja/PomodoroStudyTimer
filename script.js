let study = document.getElementById('study');
let rest = document.getElementById('break');

// set preset values
let presetStudyTime = 2;
let presetBreakTime = 1;
let presetSecond = '00';

// load webapp 
window.onload = () => {
    document.getElementById('minute').innerHTML = presetStudyTime;
    document.getElementById('second').innerHTML = presetSecond;

    study.classList.add('active');

    // hide reset button
    document.getElementById('reset').style.display = 'none';
}

// when click on start button 
function startTimer() {
    document.getElementById('start').style.display = 'none'; // hide start button
    document.getElementById('reset').style.display = 'block'; // display reset button

    secondLeft = 59;

    let studyMinLeft = presetStudyTime - 1;
    let breakMinLeft = presetBreakTime - 1;
    
    breakCount = 0;

    let countdown = () => {
        document.getElementById('minute').innerHTML = studyMinLeft;
        document.getElementById('second').innerHTML = secondLeft;

        secondLeft --;

        // start countdown
        if (secondLeft < 0) {
            studyMinLeft--;

            if (studyMinLeft < 0) {
                if (breakCount % 2 === 0) {
                    // start break
                    studyMinLeft = breakMinLeft;
                    breakCount++;

                    // change the panel
                    study.classList.remove('active');
                    rest.classList.add('active');
                }
                else {
                    // continue study
                    studyMinLeft = presetStudyTime - 1;
                    breakCount++;

                    // change the panel
                    study.classList.add('active');
                    rest.classList.remove('active');
                }
            }
            secondLeft = 59;
        }
    }

    // run countdown function every 1 sec. 
    setInterval(countdown, 100)
}

// function to reset the timer by reloading the page. 
function resetTimer() {
    //console.log("I am trying to reset timer!")
    location.reload();
}


