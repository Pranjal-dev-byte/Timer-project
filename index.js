const startButton = document.querySelector('#start');
const durationInput = document.querySelector('#duration');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = (circle.getAttribute('r') * 2 * Math.PI).toFixed(2);
circle.setAttribute('stroke-dasharray', perimeter)

let duration;
const timer = new Timer(durationInput, startButton, pauseButton,
    {
        onStart(totalDuration) {
            console.log(perimeter);
            console.log('Start the countdown!');
            duration = totalDuration;
        },
        onTick(timeRemaining) {
            console.log('Just Ticked');
            console.log((perimeter * timeRemaining) / duration - perimeter)
            circle.setAttribute('stroke-dashoffset',
                (perimeter * timeRemaining) / duration - perimeter);
        },
        onComplete() {
            console.log('Round Completed');
        }
    });

