
const launchDate = new Date("2023-11-05T13:05:00Z");

  function updateLaunchDate(){
    const currentTime = new Date().getTime();

    const distance = launchDate - currentTime;

    const days = Math.floor (distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor (
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000* 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdownDays = document.getElementById("days");
const countdownDays2 = document.getElementById("days2");
const countdownHours = document.getElementById("hours");
const countdownHours2 = document.getElementById("hours2");
const countdownMinutes = document.getElementById("minutes");
const countdownMinutes2 = document.getElementById("minutes2");
const countdownSeconds = document.getElementById("seconds");
const countdownSeconds2 = document.getElementById("seconds2");

countdownDays.innerHTML = `${days}`; 
countdownDays2.innerHTML = `${days}`;
countdownHours.innerHTML = `${hours}`;
countdownHours2.innerHTML = `${hours}`;
countdownMinutes.innerHTML = `${minutes}`;
countdownMinutes2.innerHTML = `${minutes}`;
countdownSeconds.innerHTML = `${seconds}`;
countdownSeconds2.innerHTML = `${seconds}`;

if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    countdownDays.innerHTML = '0';
    countdownDays2.innerHTML = '0';
    countdownHours.innerHTML = '0';
    countdownHours2.innerHTML = '0';
    countdownMinutes.innerHTML = '0';
    countdownMinutes2.innerHTML = '0';
    countdownSeconds.innerHTML = '0';
    countdownSeconds2.innerHTML = '0';
};


};
let display = setInterval(updateLaunchDate, 1000);


   


    


  