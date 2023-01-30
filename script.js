let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
const afterText = document.querySelector('li > span');

confirmPassword.addEventListener('input', ()=>{
    if(confirmPassword.value === password.value){
        afterText.parentNode.removeChild(afterText);
    }
})