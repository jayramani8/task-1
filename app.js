document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    myform();

});

function myform() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;


    const letters = /^[a-zA-Z ]*$/;
    const emailLetters = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phoneletters = /^[0-9]*$/;
    const range = /^\d{10}$/;
    const passwordLatters = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;



    if (username == "") {
        document.getElementById("uName").innerHTML = "Username is required";
    } else if (!username.match(letters)) {
        document.getElementById("uName").innerHTML = "Only alphabate is required";
    } else {
        document.getElementById("uName").innerHTML = "";

    }

    if (email == "") {
        document.getElementById("eMail").innerHTML = "email is required";
    } else if (!email.match(emailLetters)) {
        document.getElementById("eMail").innerHTML = "enter valid email";
    } else {
        document.getElementById("eMail").innerHTML = "";
    }

    if (phoneNumber == "") {
        document.getElementById("phNumber").innerHTML = "phone Number is required";
    } else if (!phoneNumber.match(phoneletters)) {
        document.getElementById("phNumber").innerHTML = "only number is required";
    } else if (!phoneNumber.match(range)) {
        document.getElementById("phNumber").innerHTML = "only 10 digit allow";
    }
    else {
        document.getElementById("phNumber").innerHTML = "";
    }

    if (password == "") {
        document.getElementById("pass").innerHTML = "password is required";
    } else if (!password.match(passwordLatters)) {
        document.getElementById("pass").innerHTML = "put 1 UpperCase Latter,1 number, special char and min length 8";
    } else {
        document.getElementById("pass").innerHTML = "";

    }
    const span = document.querySelectorAll("span");

    for (let i = 0; i <= span.length - 1; i++) {
        var spanDetails = span[i];

    }
    if (spanDetails.textContent === "") {
        alert("your data is submitted");
        location.reload();
    }
}
