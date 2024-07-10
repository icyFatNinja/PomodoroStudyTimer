let study = document.getElementById('study');
let rest = document.getElementById('break');

let presetStudyTime = 25;
let presetBreakTime = 5;
let presetSecond = '00';

window.onload = () => {
    document.getElementById('minute').innerHTML = presetStudyTime;
    document.getElementById('second').innerHTML = presetSecond;

    study.classList.add('active');
}

function startTimer() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    presetSecond = 59;

    let studyTimeLeft = presetStudyTime - 1;
    let breakTimeLeft = presetBreakTime - 1;
    
    breakCount = 0;

    let countdown = () => {
        document.getElementById('minute').innerHTML = studyTimeLeft;
        document.getElementById('second').innerHTML = breakTimeLeft;
    }

    // console.log(studyTimeLeft);
    // console.log(breakTimeLeft);

    presetBreakTime = presetBreakTime - 1;

}


