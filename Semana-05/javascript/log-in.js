window.onload = function (){
    //EMAIL
    var validarEmail = document.getElementById('email-input');
    
    //PASSWORD
    var validarPassword = document.getElementById('password-input');
    var passAlert = document.createElement('p');
    passAlert.innerHTML = 'Password has to be 8 characters long or more';
    passAlert.style.color = 'red';
    var passDiv = document.getElementById('password');

    validarPassword.onfocus = function(){
        passDiv.removeChild(passAlert);
    }

    validarPassword.onblur = function(){
        if (validarPassword.value.length < 8){
            validarPassword.style.border = '2px solid red';
            passDiv.appendChild(passAlert);
        }
    }
    //VALIDATION AND SUBMIT
}