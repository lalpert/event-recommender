class EventRecommender {
    constructor() {
    // All main properties should go here.
    
    this.events = [];
    this.users = [];
    
    }

    addEvent(event) {
    // Adds a new Event to the System
        this.events.push(event)
    }

    addUser(user) {
        this.users.push(user)
    }

    saveUserEvent(user, event){
        user.save(event);
    }

    deleteUser(name) {
        for( var i = 0; i < this.users.length; i++){ 
            if ( this.users[i].name === name) {
                this.users.splice(i, 1); 
            }
        }
    }
   
    deleteEvent(name) {
    // Deletes the Event from the system
        for( var i = 0; i < this.events.length; i++){ 
            if ( this.events[i].name === name) {
                this.events.splice(i, 1); 
            }
        }
    }

    findEventsByDate(date){
        // Returns all events on a given date
        return this.events.filter(event => event.date.getTime() === date.getTime());
    }
    
    findEventsbyCategory(){
        // Returns all events in a given category
        return this.events.filter(event => event.category === category);
    }
}

class Event {
    constructor(name, date, category) {
        this.name = name;
        this.date = date;
        this.category = category;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.myEvents = [];
    }

    save(event) {
        this.myEvents.push(event);
    }
}


/*
event1 = new Event("Techtonica Party", new Date("12/25/2019"), "party");
event2 = new Event("Halloween party", new Date("10/31/2019"), "party");
event3 = new Event("Road Race", new Date("12/25/2019"), "race");

user1 = new User("Leah");

er = new EventRecommender();
er.addEvent(event1);
er.addEvent(event2);
er.addEvent(event3);
er.addUser(user1);

console.log(er.findEventsByDate(new Date("12/25/2019")))
*/


if(typeof module != 'undefined'){
    module.exports = { EventRecommender, User,  Event}
}

