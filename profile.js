var users = []

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

    users.push(user)

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

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            if(users[i].password === password) {
                loginPressed()
                setTimeout(function() {
                    if(everythingCorrect === true) {
                        alert("sucesfully logged in")
                    }
                },100)
            }
        }
    }

}