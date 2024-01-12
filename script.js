const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const body = document.querySelector('body');

const randomColors = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for( i = 0; i < 6; i ++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
    
}

let intervalId;
const startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor() {
        body.style.backgroundColor = randomColors();
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null; // it means to write cleaner code with edge cases
}


btnStart.addEventListener('click',startChangingColor);
btnStop.addEventListener('click',stopChangingColor);


// Testing Async 