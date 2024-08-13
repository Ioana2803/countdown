import CountdownModel from "./model.js";
import CountdownView from "./view.js";

console.log('main.js loaded...');

const setTime = document.querySelector('.set-time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const time = document.querySelector('.textbox');    
// const seconds = document.querySelector('.seconds');
// seconds.addEventListener('input');


const model1 = new CountdownModel();
let initialTime = 0;
setTime.addEventListener('click', () => {
    model1.setTime(time.value);
    initialTime = time.value;
    time.value = " ";
});
start.addEventListener('click', () => model1.start());
pause.addEventListener('click', () => model1.pause());
reset.addEventListener('click', () => model1.reset(initialTime));
