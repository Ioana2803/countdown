export default class CountdownModel{
    constructor(initialSeconds = 10){
        this.seconds = 0;
        this.interval = null;

        this.setTime(initialSeconds);

        console.log(this.getTime());
        
    }

    setTime(seconds){
        console.log(`setting timer to ${seconds} seconds`);
        
        this.seconds = seconds;
    }

    getTime(){
        // const hours = 

        return{
            hours: '01',
            minutes: '14',
            seconds: '20'
        }
    }

    downTime(){
        if(this.interval){
            clearInterval(this.interval);
        }
        console.log(this.seconds);
        this.interval = setInterval(() => {
            this.seconds--;
            console.log(this.seconds);
            if(this.seconds <= 0){
                clearInterval(this.interval);
                console.log('Time is up');
            }
        }, 1000);
    }
}