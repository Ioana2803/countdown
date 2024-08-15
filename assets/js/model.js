export default class CountdownModel{
    constructor(){
        this.countedSeconds = 0;
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
    }
    
    formatTime(timeUnits){
        return timeUnits > 9 ? String(timeUnits) : '0' + timeUnits;
    }

    getTime(){
        const hours = Math.floor(this.countedSeconds / 3600);
        let remainingSeconds = this.countedSeconds - (hours * 3600);

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
            canBeReset: Boolean(this.countedSeconds)
        }
    }

    get state(){
        return{
            time: this.getTime(),
            actions: this.getAvailableActions()
        }
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

    reset(seconds){
        this.pause();
        console.log(`timer resets to ${seconds} seconds`);
        this.countedSeconds = seconds;

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