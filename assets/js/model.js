export default class CountdownModel{
    constructor(){
        this.countedSeconds = 0;
        this.interval = null;

        // this.setTime(initialSeconds);
        // console.log(this.getTime());
    }

    setTime(seconds){
        console.log(`setting timer to ${seconds} seconds`);
        if(this.interval){
            clearInterval(this.interval);
        }
        this.countedSeconds = seconds;
    }

    getTime(){
        const hours = Math.floor(this.countedSeconds / 3600);
        let remainingSeconds = this.countedSeconds - (hours * 3600);
        
        const minutes = Math.floor(this.countedSeconds / 60);
        remainingSeconds -= (minutes * 60);

        return{
            hours: this.formatTime(hours),
            minutes: this.formatTime(minutes),
            seconds: this.formatTime(remainingSeconds)
        }
    }

    formatTime(timeUnits){
        return timeUnits > 9 ? String(timeUnits) : '0' + timeUnits;
    }

    start(){
        if(this.interval){
            clearInterval(this.interval);
        }
        
        console.log("========");
        console.log(this.getTime());
        this.interval = setInterval(() => {
            this.countedSeconds--;
            console.log(this.getTime());
            
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
    }

    reset(seconds){
        this.pause();
        console.log(`timer resets to ${seconds} seconds`);
        this.countedSeconds = seconds;

        console.log(this.getTime());
    }
}