var loggedInUser = []

function loginPressed() {
    var login = document.getElementById("login-form")
    login.classList.toggle("opacity")
    var login = document.getElementById("login-wrapper")
    login.classList.toggle("login_height")
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

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === user.username) {
            alert("username is taken")
            username.value = ""
            password.value = ""
            email.value = ""
            console.log(users)
            return;
        }
    }

    if(user.email === "") {
        alert("please fill in email")
        return;
    }

    if(user.password === "") {
        alert("please fill in password")
        return;
    }

    if(user.username === "") {
        alert("please fill in username")
        return;
    }
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
                loggedInUser.push(users[i])
                console.log(loggedInUser)
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

function showSettingsBox() {
    const bottom = document.getElementById("bottom")
    bottom.classList.toggle("center")
    const box = document.getElementById("settings_box")
    box.classList.toggle("flex_display")

    const name = document.getElementById("sb_name_display")
    name.innerHTML = loggedInUser[0].username

    const password = document.getElementById("sb_password_display")
    password.innerHTML = "Current password: " + loggedInUser[0].password

    const email = document.getElementById("sb_email_display")
    email.innerHTML = "Current email: " + loggedInUser[0].email
}

function switchTab() {
    var settings_container = document.getElementById("settings_container")
    settings_container.classList.toggle("no_display")
    var sb_top_item_info = document.getElementById("sb_top_item_info")
    sb_top_item_info.classList.toggle("gray")
    var sb_top_item_settings = document.getElementById("sb_top_item_settings")
    sb_top_item_settings.classList.toggle("black")
}

function changeInfo() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === loggedInUser[0].username) {
            
            let email = document.getElementById("sb_email_input")
            let password = document.getElementById("sb_password_input")

            if(email.value !== "") {
                users[i].email = email.value
                document.getElementById("sb_email_display").innerHTML = "Current email: " + email.value;
                email.value = ""
            }
            if(password.value !== "") {
                users[i].password = password.value
                document.getElementById("sb_password_display").innerHTML = "Current password: " + password.value;
                password.value = ""
            }

            localStorage.setItem("users", JSON.stringify(users));
            console.log("User information updated:", users[i])
        }
    }
}
