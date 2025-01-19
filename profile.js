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