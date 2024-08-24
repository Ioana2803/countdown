export class ProgressBarView{
    constructor(parentDOMElement, pBarModel){
        this.parent = parentDOMElement;
        this.model = pBarModel;

        this.init();
        this.model.addObserver(this);
    }

    init(){
        //div exterior
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


        //div intermediar
        //creating circle for the color
        this.colorCircle = document.createElement('div');
        this.colorCircle.classList.add('color-fill-div');
        this.parent.append(this.colorCircle);

        //creating the color div
        this.colorFill = document.createElement('div');
        this.colorFill.classList.add('color-fill');
        this.colorCircle.append(this.colorFill);


        //visible div
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
    }

    update(state){
         // progress bar
         this.value.innerText = `${state.passedTimePercent}%`;
         this.fill.style.background = `conic-gradient(rgba(11,61,145,1) ${state.passedTimePercent}%, rgba(255, 255, 255, 0) 0% 100%)`;
    }
} 