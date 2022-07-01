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



// // Login customer
// router.route('/login').post(validate([
//     body('email').notEmpty().withMessage(STATUS_MESSAGES.VALIDATION.VALID.USERNAME),
//     body('password').notEmpty().withMessage(STATUS_MESSAGES.VALIDATION.VALID.PASSWORD)
// ]), customerController.login)





Sequelize


-------------------------------------------
                Migration
-------------------------------------------


To create migration and model
-------------------------------------------
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string


Create new column 
-------------------------------------------
sequelize migration:create --name name_of_your_migration


To run migrations
-----------------------------------------
sequelize db:migrate


To undo migrations
-----------------------------------------
sequelize db:migrate:undo:all


To undo specific migration
-----------------------------------------
sequelize db:migrate:undo --name 20180704124934-create-branch.js
sequelize db:migrate:undo:all --to 20190501100413-create-error-logs

To run specific migration with from and to option(From filename will not include)
npx sequelize db:migrate --from from_file_name.js --to to_file_name.js


-------------------------------------------
                Seeder
-------------------------------------------


To create seeder
-----------------------------------------
sequelize seed:generate --name demo-user


To seed all data
-----------------------------------------
sequelize db:seed:all



To seed particular file data
-----------------------------------------
sequelize db:seed --seed  name-of-seed-file



To undo all seed data
-----------------------------------------
sequelize db:seed:undo:all



To undo specific seed
-----------------------------------------
sequelize db:seed:undo --seed name-of-seed-file



Disable rebase
-----------------------------------------
git config --global pull.rebase false
git config pull.rebase false
git config --global pull.rebase
git config branch.never.rebase false
git config branch.autoSetupRebase never
