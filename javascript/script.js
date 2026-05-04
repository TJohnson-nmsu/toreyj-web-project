//Lets get it havent used Java since highschool lol
document.getElementById("characterForm").addEventListener("submit", function(event) {
    event.preventDefault();
        //Get USER DATA AHAHAHA
        let name = document.getElementById("name").value;
        let characterClass = document.getElementById("class").value;
        let power = document.getElementById("power").value;
        //Generate output information for the User
        let outputMessage =
        "Congratulations! Your very own Nerdhaven Persona has been imagined.<br><br>" +  "<strong>Gamer Tag:</strong> " + name + "<br>" +  "<strong>Nerd-ID:</strong> " + characterClass + "<br>" + "<strong>Nerd Aura:</strong> " + power + "<br><br>" +" Welcome to the Nerdhaven DLC universe. Your story begins now, and your only limit is your imagination.<br><br>" +
        "<em>\"We’re all stories in the end. Just make it a good one.\" — Doctor Who</em>";
        //Display information to user
        document.getElementById("output").innerHTML = outputMessage
});
