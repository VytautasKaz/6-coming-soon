class Clock {
    constructor(selector) {
        this.selector = selector;
        this.deadline = {
            year: (new Date()).getFullYear(),
            month: 11,
            day: 16,
            hour: 10,
            minutes: 0,
            seconds: 0
        }
        this.dateString = this.createDateString();
        this.DOM = null;
        this.DOMdays = null;
        this.DOMhour = null;
        this.DOMminutes = null;
        this.DOMseconds = null;
    }
    init() {
        if (this.isValidSelector()){
            this.findClockValueElements();
            if (!this.willBeAnniversary()){
                this.infoRenewal();
            }
            this.start();
        }
    }
    createDateString() {
        const {year, month, day, hour, minutes, seconds} = this.deadline;
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
    willBeAnniversary() {
        const anniversaryMS = (new Date(this.dateString)).getTime();
        return Date.now() < anniversaryMS;
    }
    infoRenewal(){
        this.deadline.year++;
        this.dateString = this.createDateString();
    }
    isValidSelector() {
        const DOM = document.querySelector(this.selector);
            if (!DOM){
                console.error('Error: netinkamas selektorius.');
                return false;
            }
            this.DOM = DOM;
            return true;
        }
    findClockValueElements() {
        const values = this.DOM.querySelectorAll('.value');
        this.DOMdays = values[0];
        this.DOMhour = values[1];
        this.DOMminutes = values[2];
        this.DOMseconds = values[3];
    }
    start() {
        let anniversaryMS = (new Date(this.dateString)).getTime();
        setInterval(() => {
            const now = new Date();
            let diff = anniversaryMS - now;
            if (diff < 0) {
                this.infoRenewal();
                future = (new Date(this.dateString)).getTime();
                diff = anniversaryMS - now;
            }
            let secondsLeft = Math.floor(diff / 1000);
            let days = Math.floor(secondsLeft / 60 / 60 / 24);
            secondsLeft -= days * 60 * 60 * 24;
            let hours = Math.floor(secondsLeft / 60 / 60);
            secondsLeft -= hours * 60 * 60;
            let minutes = Math.floor(secondsLeft / 60);
            secondsLeft -= minutes * 60;
            this.DOMdays.innerText = days;
            this.DOMhour.innerText = this.formatNumber(hours);
            this.DOMminutes.innerText = this.formatNumber(minutes);
            this.DOMseconds.innerText = this.formatNumber(secondsLeft);
        }, 1000);
    }
    formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }
}
export {Clock}