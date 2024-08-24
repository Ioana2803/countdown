export default class CountdownView{
    constructor(parentDOMElement, countdownModel){
        this.parent = parentDOMElement;
        this.model = countdownModel;

        this.init();
        this.model.addObserver(this);
    }

    init(){
        // creating time text div
        this.textDiv = document.createElement('div');
        this.textDiv.classList.add('top-text');
        this.parent.append(this.textDiv);

        this.timeSpan = document.createElement('span');
        this.timeSpan.classList.add('span-text');
        this.timeSpan.innerText = 'Timer set to:'
        this.textDiv.append(this.timeSpan);

        this.timeText = document.createElement('div');
        this.timeText.classList.add('time-text');
        this.textDiv.append(this.timeText);

        // creating countdown div
        this.countdownDiv = document.createElement('div');
        this.countdownDiv.classList.add('countdown');
        this.parent.append(this.countdownDiv);

        // creating box div
        this.box = document.createElement('div');
        this.box.classList.add('box');
        this.countdownDiv.append(this.box);

        // creating hours div
        this.hours = document.createElement('div');
        this.hours.classList.add('hours', 'text');
        this.hours.innerText = '00';
        this.hours.setAttribute('contenteditable', 'true');
        this.box.append(this.hours);
        this.hours.addEventListener('focusout', () => this.setTime());

        // creating separators div
        this.separators = document.createElement('div');
        this.separators.classList.add('separators');
        this.separators.innerText = ':';
        this.countdownDiv.append(this.separators);


        // creating box div
        this.box = document.createElement('div');
        this.box.classList.add('box');
        this.countdownDiv.append(this.box);

        // creating minutes div
        this.minutes = document.createElement('div');
        this.minutes.classList.add('minutes', 'text');
        this.minutes.setAttribute('contenteditable', 'true');
        this.minutes.innerText = '00';
        this.box.append(this.minutes);
        this.minutes.addEventListener('focusout', () => this.setTime());

        // creating separators div
        this.separators = document.createElement('div');
        this.separators.classList.add('separators');
        this.separators.innerText = ':';
        this.countdownDiv.append(this.separators);


        // creating box div
        this.box = document.createElement('div');
        this.box.classList.add('box');
        this.countdownDiv.append(this.box);

        // creating seconds div
        this.seconds = document.createElement('div');
        this.seconds.classList.add('seconds', 'text');
        this.seconds.setAttribute('contenteditable', 'true');
        this.seconds.innerText = '00';
        this.box.append(this.seconds);
        this.seconds.addEventListener('focusout', () => this.setTime());

        // creating buttons div
        this.buttons = document.createElement('div');
        this.buttons.classList.add('buttons');
        this.parent.append(this.buttons);

        // creating start button
        this.start = document.createElement('button');
        this.start.classList.add('start', 'btn');
        this.buttons.append(this.start);
        this.start.innerText = 'Start';
        this.start.addEventListener('click', () => this.model.start());

        //creating pause button
        this.pause = document.createElement('button');
        this.pause.classList.add('pause', 'btn');
        this.buttons.append(this.pause);
        this.pause.innerText = 'Pause';
        this.pause.addEventListener('click', () => this.model.pause());

        //creating reset button
        this.reset = document.createElement('button');
        this.reset.classList.add('reset', 'btn');
        this.buttons.append(this.reset);
        this.reset.innerText = 'Reset';
        this.reset.addEventListener('click', () => this.model.reset());
    }

    setTime(){
        const hours = Number(this.hours.innerText);
        const minutes = Number(this.minutes.innerText);
        const seconds = Number(this.seconds.innerText);
        const newTime = hours * 3600 + minutes * 60 + seconds;
        console.log(newTime, typeof newTime);
        
        this.model.setTime(newTime);
    }

    update(state){
        console.log(`time:`);
        console.log(state.time);

        this.timeText.innerText = `${state.initialTime.hours} hours ${state.initialTime.minutes} minutes ${state.initialTime.seconds} seconds`;

        this.hours.innerText = state.time.hours;
        this.minutes.innerText = state.time.minutes;
        this.seconds.innerText = state.time.seconds;

        // editable div enable/disable
        this.hours.contentEditable = state.actions.canBeStarted;
        this.minutes.contentEditable = state.actions.canBeStarted;
        this.seconds.contentEditable = state.actions.canBeStarted;

        // buttons enable/disable
        this.start.disabled = !state.actions.canBeStarted;
        this.pause.disabled = !state.actions.canBeStopped;
        this.reset.disabled = !state.actions.canBeReset;
    }
}