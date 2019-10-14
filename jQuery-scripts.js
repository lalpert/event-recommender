$(document).ready( () => {
    const er = new EventRecommender();
    window.er = er; // Just for debugging purposes -- makes eventRecommender visible from browser console

    // Hardcoded for now
    user1 = new User("Leah");
    user2 = new User("Emily");
    er.addUser(user1);
    er.addUser(user2);

    showUsers();

    $("#add-user").submit(function( event ) {
        var name = $("#add-user-user-name").val()
        var user = new User(name);
        er.addUser(user);
        event.preventDefault();
        showUsers();
    });

    $("#delete-user").submit(function( event ) {
        var name = $("#delete-user-user-name").val()
        er.deleteUser(name);
        event.preventDefault();
        showUsers();
    });

    


function showUsers() {
    $('#all-users').empty();
    er.users.forEach(user => {
        var str =`<li>${user.name}</li>`;
        $('#all-users').append(str);
    });
}

});