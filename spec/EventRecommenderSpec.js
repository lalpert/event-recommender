describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../eventrec.js');

    let er;
  
    beforeEach(() => {
      er = new EventRecommender();
    });
  
    describe("addEvent", () => {
      it("adds a new Event to the system", () => {
        event = new Event("Big Party", new Date(), "party")
        er.addEvent(event);
        expect(er.events.length).toEqual(1);
        expect(er.events[0].name).toEqual("Big Party"); 
        expect(er.events[0].category).toEqual("party"); 
      });
    });
  
    describe("addUser", () => {
      it("adds a new User to the system", () => {
        user = new User("Leah")
        er.addUser(user);
        expect(er.users.length).toEqual(1);
      });
    });
  
    describe("saveUserEvent", () => {
      it("adds an event to a user's personal event array", () => {
        event = new Event("Big Party", new Date(), "party")
        user = new User("Leah")
        er.addEvent(event);
        er.addUser(user);
        er.saveUserEvent(user, event); // change these to match your method signature
        expect(user.myEvents.length).toEqual(1);
      });
    });
  
    describe("deleteUser", () => {
      it("removes a User from the system", () => {
        let user = new User("Leah")
        er.addUser(user);
        er.deleteUser("Leah");
        expect(er.users.length).toEqual(0);
      });
    });
  
    describe("deleteEvent", () => {
      it("removes the event from the system", () => {
        event = new Event("Big Party", new Date(), "party")
        er.addEvent(event);
        er.deleteEvent("Big Party");
        expect(er.events.length).toEqual(0);
      });
    });
  });