window.onload = function (){
    var validar = [];
    
    var validarEmail = document.getElementById('email-input');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailAlert = document.createElement('p');
    emailAlert.innerHTML = 'Email non valid';
    emailAlert.style.color = 'red';
    var emailDiv = document.getElementById('email');

    validarEmail.onfocus = function(){
        emailDiv.removeChild(emailAlert);
    }

    validarEmail.onblur = function(){
        if (emailExpression.test(validarEmail.value)){
            validarEmail.style.border = '2px solid #363867';
            validar[0] = true;
        }else{
            validarEmail.style.border = '2px solid red';
            emailDiv.appendChild(emailAlert);
            validar[0] = false;
        }
    }
    
    var validarPassword = document.getElementById('password-input');
    var passAlert = document.createElement('p');
    passAlert.innerHTML = 'Password has to be 8 characters long or more';
    passAlert.style.color = 'red';
    var passDiv = document.getElementById('password');

    validarPassword.onfocus = function(){
        passDiv.removeChild(passAlert);
    }

    validarPassword.onblur = function(){
        if (validarPassword.value.length >= 8){
            validarPassword.style.border = '2px solid #363867';
            validar[1] = true;
        }else{
            validarPassword.style.border = '2px solid red';
            passDiv.appendChild(passAlert);
            validar[1] = false;
        }
    }

    var button = document.getElementById('button-send');
    
    button.onclick = function(){
        if (validar.includes(false)){
            alert ('There are invalids inputs. Please correct and send again.')
        }else{
            alert('Email: ' + validarEmail.value + '\nPassword: ' + validarPassword.value);
        }
    }
}