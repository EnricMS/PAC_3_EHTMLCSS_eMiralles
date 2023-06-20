let emails = [];

function guardarEmail() {
    let inputEmail = document.getElementById("email").value;
    if (inputEmail !== "") {
        emails.push(inputEmail);
        document.getElementById("SavedEmails").innerHTML = "SavedEmails: " + emails.join(", ");
    }
}

