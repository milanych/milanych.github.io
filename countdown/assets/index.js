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