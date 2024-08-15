export default class CountdownView{
    constructor(parentDOMElement, countdownModel){
        this.parent = parentDOMElement;
        this.model = countdownModel;
        this.initialTime = 0;

        this.init();
        this.model.addObserver(this);
    }

    init(){
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
        this.hours.addEventListener('keyup', () => this.setTime());

        // creating separators div
        this.separators = document.createElement('div');
        this.separators.classList.add('separators', 'text');
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
        this.minutes.addEventListener('keyup', () => this.setTime());

        // creating separators div
        this.separators = document.createElement('div');
        this.separators.classList.add('separators', 'text');
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
        this.seconds.addEventListener('keyup', () => this.setTime());

        // creating buttons div
        this.buttons = document.createElement('div');
        this.buttons.classList.add('buttons');
        this.parent.append(this.buttons);

        // creating start button
        this.start = document.createElement('button');
        this.start.classList.add('start');
        this.buttons.append(this.start);
        this.start.innerText = 'Start';
        this.start.addEventListener('click', () => this.model.start());

        //creating pause button
        this.pause = document.createElement('button');
        this.pause.classList.add('pause');
        this.buttons.append(this.pause);
        this.pause.innerText = 'Pause';
        this.pause.addEventListener('click', () => this.model.pause());

        //creating reset button
        this.reset = document.createElement('button');
        this.reset.classList.add('reset');
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

        this.hours.innerText = state.time.hours;
        this.minutes.innerText = state.time.minutes;
        this.seconds.innerText = state.time.seconds;

        this.hours.contentEditable = state.actions.canBeStarted ? true : false;
        this.minutes.contentEditable = state.actions.canBeStarted ? true : false;
        this.seconds.contentEditable = state.actions.canBeStarted ? true : false;

        this.start.disabled = state.actions.canBeStarted ? false : true;
        this.pause.disabled = state.actions.canBeStopped ? false : true;
        this.reset.disabled = state.actions.canBeReseted ? false : true;
    }
}