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

        //creating progress circle exterior moving div
        this.extPCircle = document.createElement('div');
        this.extPCircle.classList.add('ext-circle');
        this.pBarDiv.append(this.extPCircle);

        //creating ext circle fill div
        this.fill = document.createElement('div');
        this.fill.classList.add('bar-ext-fill');
        this.extPCircle.append(this.fill);

        
        // creating progress bar2
        this.pBarDiv2 = document.createElement('div');
        this.pBarDiv2.classList.add('progress-bar2');
        this.parent.append(this.pBarDiv2);

        //creating stats item div
        this.pBarItem = document.createElement('div');
        this.pBarItem.classList.add('pBar-item');
        this.pBarDiv2.append(this.pBarItem);

        //creating text span
        this.value = document.createElement('span');
        this.value.classList.add('percentage');
        this.pBarItem.append(this.value);

        //creating progress circle interior div
        this.progressCircle = document.createElement('div');
        this.progressCircle.classList.add('int-circle');
        this.pBarDiv2.append(this.progressCircle);

        //creating int circle fill div
        this.intFill = document.createElement('div');
        this.intFill.classList.add('bar-int-fill');
        this.progressCircle.append(this.intFill);
    }

    update(state){
         // progress bar
         this.value.innerText = `${state.passedTimePercent}%`;
         this.fill.style.background = `conic-gradient(rgba(255, 0, 0, 1) ${state.passedTimePercent}%, rgba(255, 255, 255, 0.50) 0% 100%)`;
    }
} 