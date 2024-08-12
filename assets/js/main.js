import CountdownModel from "./model.js";

console.log('main.js loaded...');

const submit = document.querySelector('.submit');
const time = document.querySelector('.textbox');    

const model1 = new CountdownModel();
submit.addEventListener('click', () => model1.downTime(time.value));
