import CountdownModel from "./model.js";
import CountdownView from "./view.js";

const container = document.querySelector('.container');

const model1 = new CountdownModel();
const view1 = new CountdownView(container, model1);