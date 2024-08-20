export class ProgressBarView{
    constructor(parentDOMElement, pBarModel){
        this.parent = parentDOMElement;
        this.model = pBarModel;

        this.init();
        this.model.addObserver(this);
    }

    init(){
        // creating progress bar 
        this.pBarDiv = document.createElement('div');
        this.pBarDiv.classList.add('progress-bar');
        this.parent.append(this.pBarDiv);

        //creating stats item div
        this.pBarItem = document.createElement('div');
        this.pBarItem.classList.add('pBar-item');
        this.pBarDiv.append(this.pBarItem);

        //creating text span
        this.value = document.createElement('span');
        this.pBarItem.append(this.value);

        //creating bars div
        this.bars = document.createElement('div');
        this.bars.classList.add('bar');
        this.pBarItem.append(this.bars);

        //creating bars fill div
        this.fill = document.createElement('div');
        this.fill.classList.add('bar-fill');
        this.bars.append(this.fill);
    }

    update(state){
         // progress bar
         this.value.innerText = `${state.passedTimePercent}%`;
         this.fill.style.width = `${state.passedTimePercent}%`;
    }
} 