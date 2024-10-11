const email = document.getElementById("usertext");
const password = document.getElementById("keytext");
const button = document.getElementById("btnLogin");
button.addEventListener("click", (e) => {
    debugger;
    let message = [];
    if (
        email.value == null ||
        email.value == 0 ||
        password.value == null ||
        password.value == 0
    ) {
        message.push("Please Fill Your Data Correctly");
        alert(message);
        button.style.borderColor = "red";
    } else {
        let message = [];
        message.push("Done");
        alert(message);
        button.style.borderColor = "green";
    }
});

email.addEventListener("blur", (e) => {
    debugger;
    var validationEmail = document.getElementById("parag1");
    var NameVal;
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "" || email.value == 0 || email.value <= 0) {
      
        validationEmail.innerText = "Please Enter Your Email Correctly";
        email.style.borderColor = "red";
        validationEmail.style.color = "red";
    } else {
        validationEmail.innerText = "Correct";
        email.style.borderColor = "green";
        validationEmail.style.color = "green";
    }
});
password.addEventListener("blur", (e) => {
    debugger;
    var validationPass = document.getElementById("parag2");
    if (
        password.value == "" ||
        password.value <= 0 ||
        password.value.length <= 4
    ) {
   
        validationPass.innerText = "Please Enter Your Passwrod Correctly";
        validationPass.style.color = "red";
        password.style.borderColor = "red";
    } else {
        validationPass.innerText = "Correct";
        validationPass.style.color = "green";
        password.style.borderColor = "green";
    }
});

$("#usertext").blur(function() {
    var validationEmail = document.getElementById("parag1");
    var NameVal;
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($("#usertext").val().match(letters)) {
        validationEmail.innerText = "Correct";
        email.style.borderColor = "green";
        validationEmail.style.color = "green";
        NameVal = true;
    } else if ($(this).val() == null || $(this).val() == "") {
        validationEmail.innerText = "Please Enter Your Email Correctly";
        email.style.borderColor = "red";
        validationEmail.style.color = "red";
    } else {
        validationEmail.innerText = "Please Enter Your Email Correctly";
        email.style.borderColor = "red";
        validationEmail.style.color = "red";

        return false;
    }s
});
