import { EventRecommender, User, Event } from 'eventrec.js';

alert("asdfasdfas");
$(document).ready( () => {
    alert("qwesrqwerqwe")
    const eventRecommender = new EventRecommender();

    // Hardcoded for now
    user1 = new User("Leah");
    user2 = new User("Emily");
    er.addUser(user1);
    er.addUser(user2);

    er.users.forEach(user => {
        var str ='<li>${user.name}</li>';
        $('#all-users').append(str);
    });

    
});