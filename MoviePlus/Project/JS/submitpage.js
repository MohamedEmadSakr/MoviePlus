/*
function validateForm() {
    let name1 = $("#Fname").val();
    let name2 = $("#Lname").val();
    let date = $("#dob").val();
    let pass = $("#Password").val();
    let cpass = $("#CPassword").val();

    if (name1 == "" || name1 == null) {
        $("#Fnameval").show().css("color", "red");
    }
    if (name2 == "" || name2 == null) {
        $("#Lnameval").show().css("color", "red");
    }
    if (date == null || date == "") {
        $("#dobval").show().css("color", "red");
    }

    if (pass == null || pass == "") {
        $("#passval").show().css("color", "red");
    }
    if (cpass == null || cpass == "") {
        $("#Cpassval").show().css("color", "red");
    }
    alert("Please Fill all the Info");
    return false;
}
*/
/////////////////////////////////////////////////////////////////////////
const FName=document.getElementById("Fname");
const LName=document.getElementById("Lname");
const Dateof=document.getElementById("dob");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const CPass = document.getElementById("CPassword");
const button = document.getElementById("btnLogin");
button.addEventListener("click", (e) => {
    debugger;
    let message = [];
    if (
        FName.value == null ||
        FName.value == 0 ||
        LName.value == null ||
        LName.value == 0 ||
        Dateof.value == null ||
        Dateof.value == 0 ||
        email.value == null ||
        email.value == 0 ||
        password.value == null ||
        password.value == 0||
        CPass.value == null ||
        CPass.value == 0
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









$("#Fname").blur(function() {
    var NameVal;
    var letters = /^[A-Za-z]+$/;
    if ($("#Fname").val().match(letters)) {
        $("#Fnameval").hide();
        NameVal = true;
    } else if ($(this).val() == null || $(this).val() == "") {
        $("#Fnameval").show().css("color", "red");
    } else {
        alert("Name Can't take numbers");
        $("#Fnameval").show().css("color", "red");

        return false;
    }
});

$("#Lname").blur(function() {
    var NameVal;
    var letters = /^[A-Za-z]+$/;
    if ($("#Lname").val().match(letters)) {
        $("#Lnameval").hide();
        NameVal = true;
    } else if ($(this).val() == null || $(this).val() == "") {
        $("#Lnameval").show().css("color", "red");
    } else {
        alert("Name Can't take numbers");
        $("#Lnameval").show().css("color", "red");

        return false;
    }
});
$("#Email").blur(function() {
    var NameVal;
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($("#Email").val().match(letters)) {
        $("#Emailval").hide();
        NameVal = true;
    } else if ($(this).val() == null || $(this).val() == "") {
        $("#Emailval").show().css("color", "red");
    } else {
        alert("Wirte A Correct Email");
        $("#Emailval").show().css("color", "red");

        return false;
    }s
});
$("#dob").blur(function() {
    if ($("#dob").val() == null || $("#dob").val() == "") {
        $("#dobvalidation").show().css("color", "red");
    } else {
        $("#dobvalidation").hide();
    }
});


$("#Password").blur(function() {
    if ($("#Password").val() == null || $("#Password").val() == "") {
        $("#passval").show().css("color", "red");
    } else {
        $("#passval").hide();
    }
});

$("#CPassword").blur(function() {
    if ($("#CPassword").val() == null || $("#CPassword").val() == "") {
        $("#Cpassval").show().css("color", "red");
    } else {
        $("#Cpassval").hide();
    }
});



