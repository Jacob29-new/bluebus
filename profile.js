

function loginPressed() {
    var login = document.getElementById("login-form")
    login.classList.toggle("opacity")
    var login_button = document.getElementById("login-button")
    login_button.classList.toggle("magenta")
}

function registerPressed() {
    var register = document.getElementById("register-form")
    register.classList.toggle("opacity")
    var register_button = document.getElementById("register-button")
    register_button.classList.toggle("magenta")
}

function createAccount() {

    let everythingCorrect = true;
    const username = document.getElementById("register_username")
    const password = document.getElementById("register_password")
    const email = document.getElementById("register_email")

    const user = {
        "username": username.value,
        "password": password.value,
        "email": email.value
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    username.value = ""
    password.value = ""
    email.value = ""

    registerPressed()
    setTimeout(function() {
        if(everythingCorrect === true) {
            alert("account sucesfully created")
        }
    },100)

    console.log("users:", users)
}

function loginToAccount() {

    everythingCorrect = true;
    const username = document.getElementById("login_username").value
    const password = document.getElementById("login_password").value

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const admin1 = {
        "username": "admin",
        "password": "12345",
        "email": "admin@gmail.com"
    } 

    users.push(admin1);

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            if(users[i].password === password) {
                loginPressed()
                const lb = document.getElementById("login-button")
                const rb = document.getElementById("register-button")
                lb.classList.add("no_display")
                rb.classList.add("no_display")
                setTimeout(function() {
                    if(everythingCorrect === true) {
                        alert("sucesfully logged in")
                        displaySettings(users[i].username)
                    }
                },100)
            }
        }
    }

}

function displaySettings(username) {
    const settings = document.getElementById("settings");
    settings.style.display = "flex"; 
    const settings_name = document.getElementById("settings_name")
    settings_name.innerText = username
}