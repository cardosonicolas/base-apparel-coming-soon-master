let $email = document.getElementById("email");
let $btn = document.querySelector(".main-form__submit");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let $pMessage = document.querySelector(".message");


const validate= () => {
    console.log($email.value);
    if(emailRegex.test($email.value)){
        $pMessage.textContent = "";
    }else{
        $pMessage.textContent = "Please provide a valid email";
        $email.style.border = "1px solid #f96262";
    }
}

$btn.addEventListener("click", (e) =>{
    e.preventDefault();
    validate();
});