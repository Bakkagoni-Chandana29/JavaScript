

    let message = document.getElementById("message")

    const validateForm = (e) => {
    event.preventDefault()

    // console.log(e);
    // console.log(e.target);

    let uname = e.target.username
    let passkey = e.target.password

    if (uname.value === "" && passkey.value === "") {

        message.innerHTML = "Enter username and password"
        
        uname.style.borderColor = "red"
        passkey.style.borderColor = "red"

    } else if (passkey.value === "") {
        message.innerHTML = "Enter password"

        uname.style.borderColor = "lightgray"
        passkey.style.borderColor = "red"

    } else if (uname.value === "") {
        message.innerHTML = "Enter username"

        uname.style.borderColor = "red"
        passkey.style.borderColor = "lightgray"
    } else {
        message.innerHTML = "Login successful"

        message.style.color = "green"
        uname.style.borderColor = "lightgray"
        passkey.style.borderColor = "lightgray"

    }
    
}