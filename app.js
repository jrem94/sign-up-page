const getButton = document.getElementById("submit");
let userEmail = document.getElementById("userEmail");

getButton.addEventListener("click", () => {

    userEmail = userEmail.value;

    console.log(userEmail);

    alert("Singed up as " + userEmail + "!");

});