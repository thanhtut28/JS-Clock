const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
     const date = new Date();
     const secondRatio = date.getSeconds() / 60;
     const minuteRatio = (secondRatio + date.getMinutes()) / 60;
     const hourRatio = (minuteRatio + date.getHours()) / 12;
     setRotation(secondHand, secondRatio);
     setRotation(minuteHand, minuteRatio);
     setRotation(hourHand, hourRatio);
}

function setRotation(element, ratio) {
     element.style.setProperty('--rotation', ratio * 360);
}

setInterval(setClock, 1000);
