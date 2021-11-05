const emailInput = document.querySelector("input[name='email']")
const passwordInput = document.querySelector("input[name='password']")
const msg = document.querySelector(".msg")

function checkForm() {
    event.preventDefault()
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    

    if(emailValue == "" || passwordValue == "") {
        let msgText = ("Preencha os campos!")
        msg.classList = "error"
        msg.innerText = msgText
        return     
    }
    if(emailValue != "" && passwordValue != "") {
        msg.textContent = "";
        msg.classList = "";
        window.alert("Acesso autorizado!")
    }
}

    

