const button = document.getElementById('start-button');
const time = document.getElementById('time');
const input = document.getElementById('input');

let timer = null;
let timeLeft = 0;

button.addEventListener("click" , () => {
    clearInterval(timer);
    timeLeft  = parseInt(input.value);

    if(isNaN(timeLeft) || timeLeft <= 0){
        time.innerText = "Please enter a valid number";
        return;
    }

    time.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        time.innerText = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timer);
            time.innerText = "Time's up!";
        }
    }, 1000);
});




