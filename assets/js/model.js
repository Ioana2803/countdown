export default class CountdownModel{
    constructor(initialTime = 60){
        this.initialTime = initialTime;
        this.countedSeconds = this.initialTime;
        this.interval = null;
        this.observers = [];

        this.notifyObservers();
    }

    setTime(seconds){
        console.log(`setting timer to ${seconds} seconds`);
        if(this.interval){
            clearInterval(this.interval);
        }
        this.countedSeconds = seconds;
        this.initialTime = seconds;
        this.notifyObservers();
    }
    
    formatTime(timeUnits){
        return timeUnits > 9 ? String(timeUnits) : '0' + timeUnits;
    }

    getTime(seconds){
        const hours = Math.floor(seconds / 3600);
        let remainingSeconds = seconds - (hours * 3600);

        const minutes = Math.floor(remainingSeconds / 60);
        remainingSeconds -= (minutes * 60);

        return{
            hours: this.formatTime(hours),
            minutes: this.formatTime(minutes),
            seconds: this.formatTime(remainingSeconds)
        }
    }

    getAvailableActions(){
        return{
            canBeStarted: !Boolean(this.interval),
            canBeStopped: Boolean(this.interval),
            canBeReset: this.countedSeconds !== this.initialTime
        }
    }

    get state(){
        const state = {
            initialTime: this.getTime(this.initialTime),
            time: this.getTime(this.countedSeconds),
            actions: this.getAvailableActions(),

            passedTimePercent: Math.round(this.countedSeconds * 100 / this.initialTime)
        }
        
        return state;
    }

    start(){
        if(this.interval){
            clearInterval(this.interval);
        }
        
        console.log("========");
        this.notifyObservers();

        this.interval = setInterval(() => {
            this.countedSeconds--;
            this.notifyObservers();
            
            if(this.countedSeconds <= 0){
                clearInterval(this.interval);
                console.log('Time is up');
            }
        }, 1000);
    }

    pause(){
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.notifyObservers();
    }

    reset(){
        this.pause();
        this.countedSeconds = this.initialTime;
        console.log(`timer resets to ${this.countedSeconds} seconds`);

        this.notifyObservers();
    }

    addObserver(newObserver){
        this.observers.push(newObserver);
        newObserver.update(this.state);
    }

    notifyObservers(){
        for (let i = 0; i < this.observers.length; i++){
            this.observers[i].update(this.state);
        }
    }
}