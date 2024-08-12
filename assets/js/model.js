export default class CountdownModel{
    constructor(){
        this.interval = null;

        console.log(this.getTime());
        
    }

    getTime(){
        return{
            hours: '01',
            minutes: '14',
            seconds: '20'
        }
    }

    downTime(seconds){
        console.log(seconds);
        this.interval = setInterval(() => {
            seconds--;
            console.log(seconds);
            if(seconds == 0){
                clearInterval(this.interval);
                console.log('Time is up');
            }
        }, 1000);
    }
}