//Countdown timer
let finalTime = new Date('May 4, 2023').getTime();
const fullTime = (time) => (time < 10) ? `0${time}` : time;
let btn = document.querySelector("#datePicker")

btn.addEventListener('change', () => {
  finalTime = Date.parse(document.querySelector("#datePicker").value)
})

let countdown = () => {
  const currentTime = new Date().getTime();
  let interval = (finalTime - currentTime) / 1000;
  let days = Math.floor(interval / 3600 / 24);
  let hours = Math.floor((interval / 3600) % 24);
  let minutes = Math.floor((interval / 60) % 60);
  let seconds = Math.floor(interval % 60);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = fullTime(hours);
  document.querySelector("#minutes").innerHTML = fullTime(minutes);
  document.querySelector("#seconds").innerHTML = fullTime(seconds);
};
setInterval(countdown, 1000);


const left = document.querySelector("#dateLeft");
const right = document.querySelector("#dateRight");

left.addEventListener('click', () => {
  document.querySelector("#datePicker").stepDown()
  finalTime = Date.parse(document.querySelector("#datePicker").valueAsDate)
})

right.addEventListener('click', () => {
  document.querySelector("#datePicker").stepUp()
  finalTime = Date.parse(document.querySelector("#datePicker").valueAsDate)
})

let countDownTimerClick = document.querySelector("#showCountdownTime");
let RealTimeTimerClick = document.querySelector("#showRealTimeTimer");

countDownTimerClick.addEventListener('click', () => {
  document.querySelector("#realTimeTimer").style.display = 'none';
  document.querySelector("#countdownTimer").style.display = 'flex';
});

RealTimeTimerClick.addEventListener('click', () => {
  document.querySelector("#realTimeTimer").style.display = 'flex';
  document.querySelector("#countdownTimer").style.display = 'none';
});

//Stopwatch timer
let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let amount = 0;

let showStopWatch = document.querySelector("#showRealTimeTimer");
let showCountdown = document.querySelector("#showCountdownTime");
showStopWatch.addEventListener('click', () => {
  showStopWatch.style.borderTop = '1px solid #0000ff';
  showStopWatch.style.color = '#0000ff'
  showCountdown.style.borderTop = 'none';
  showCountdown.style.color = 'black'
})
showCountdown.addEventListener('click', () => {
  showCountdown.style.borderTop = '1px solid #0000ff';
  showStopWatch.style.borderTop = 'none';
  showCountdown.style.color = '#0000ff'
  showStopWatch.style.color = 'black'
})

const realTimer = () => {
  document.querySelector("#realTimer-body").innerHTML = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}0`;
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds += 1;
    amount += 1;
  };
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
}

let startTimerButton = document.querySelector("#realTimer-start");
let stopTimerButton = document.querySelector("#realTimer-stop");
let resetTimerButton = document.querySelector("#realTimer-reset");
let lapTimerButton = document.querySelector("#realTimer-lap");

const showLapButton = () => lapTimerButton.style.display = 'inline';
const showHideButton = (hide = '', show = '') => {
  hide.style.display = 'none';
  show.style.display = 'inline';
}

startTimerButton.addEventListener('click', () => {
  document.querySelector("#realTimer-rotate").classList.add('rotating')
  stopTimerButton.innerHTML = 'Stop';
  timer = setInterval(realTimer, 10);
  stopTimerButton.disabled = false;
  startTimerButton.disabled = true;
  lapTimerButton.disabled = false;
  showLapButton();
  showHideButton(resetTimerButton, stopTimerButton);
});

stopTimerButton.addEventListener('click', () => {
  document.querySelector("#realTimer-rotate").classList.remove('rotating')
  clearInterval(timer);
  startTimerButton.disabled = false;
  lapTimerButton.disabled = true;
  showHideButton(stopTimerButton, resetTimerButton);
});

resetTimerButton.addEventListener('click', () => {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.querySelector("#realTimer-body").innerHTML = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}0`;
  document.querySelector("#realTimer-laps").innerHTML = ""
  i = 0;
});

let i = 0;
lapTimerButton.addEventListener('click', () => {
  let lap = document.createElement('li');
  let temp = document.createElement('li');
  lap.id = `lap-${i}`;
  temp.id = `temp-${i}`;
  temp.innerHTML = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}0`;
  localStorage.setItem(`current-${i}`, temp.innerHTML)
  let diff = diffCalc(i);
  document.querySelector("#realTimer-laps").appendChild(lap);
  lap.innerHTML = `${i + 1}. 0${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}0 ${diff}`;
  i++;
  count = [];
  nextCount = [];
});

const diffCalc = (iterator) => {
  if (iterator === 0) {
    return '';
  }
  let current = localStorage.getItem(`current-${iterator - 1}`)
  let lapPrev = (iterator !== 0) ? current.split(':').map(el => Number(el)) : [0, 0, 0];
  let lapNext = localStorage.getItem(`current-${iterator}`).split(':').map(el => Number(el));
  let [minPrev, secPrev, milPrev] = lapPrev;
  let [minNext, secNext, milNext] = lapNext;
  let sumPrev = milPrev + secPrev * 1000 + minPrev * 60000
  let sumNext = milNext + secNext * 1000 + minNext * 60000
  let difference = sumNext - sumPrev;
  return (difference < 1000) ? `(+00.${difference})` : `${(Math.floor(difference / 1000) > 9) ? '(+' : '(+0'}${Math.floor(difference / 1000)}.${((difference % 1000) < 100) ? '0' + difference % 1000 : difference % 1000})`;
}
