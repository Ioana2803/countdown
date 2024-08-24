import CountdownModel from "./model.js";
import { ProgressBarView } from "./pBar-view.js";
import CountdownView from "./view.js";

const container = document.querySelector('.container');

const model1 = new CountdownModel();
const barView = new ProgressBarView(container, model1);
const view1 = new CountdownView(container, model1);