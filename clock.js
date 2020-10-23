let minute = 1;
let second = 1;
let hour = 1;

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

let hourPosition = (hour*360/12)+(minute*(360/60)/12);
let minutePosition = (minute*360/60)+(second*(360/60)/60);
let secondPosition = second*360/60;

function workingClock () {
hourPosition = hourPosition+(3/360);
hourHand.style.transform = "rotate(" + hourPosition + "deg)"
minutePosition = minutePosition+(6/360);
minuteHand.style.transform = "rotate(" + minutePosition + "deg)"
secondPosition = secondPosition+6;
secondHand.style.transform = "rotate(" + secondPosition + "deg)"
}

var interval = setInterval(workingClock,1000);

















// function secondsRotation(seconds){
//     var degrees = (seconds * 6)
//     secondHand.style.transform = 'rotate(' + (seconds * 6) + 'deg)'
//     return secondHand;
// }


// function minuteRotation(){
//     var degrees = (minutes * 6)
//     minuteHand.style.transform = 'rotate(' + (minutes * 6) + 'deg)'
//     return minuteHand;
// }

// function hourRotation(){
//     var degrees = (hours * 6)
//     hourHand.style.transform = 'rotate(' + (hours * 6) + 'deg)'
//     return hourHand;
// }


// SetInterval(secondsRotation(), 1000);
// setInterval(minuteRotation(), 6000);
// setInterval(hourRotation(), 36000);

