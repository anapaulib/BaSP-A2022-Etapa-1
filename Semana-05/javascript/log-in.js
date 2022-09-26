window.onload = function (){
    //EMAIL
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
        if (emailExpression.test(validarEmail)){
        }else{
            validarEmail.style.border = '2px solid red';
            emailDiv.appendChild(emailAlert);
        }
    }
    
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
        if (validarPassword.value.length >= 8){
            validarPassword.style.border = '2px solid #363867';
        }else{
            validarPassword.style.border = '2px solid red';
            passDiv.appendChild(passAlert);
        }
    }

    //VALIDATION AND SUBMIT
    var validar = [];
    validar[0] = emailExpression.test(validarEmail);
    validar[1] = validarPassword.value.length >= 8;
    var button = document.getElementById('button-send');

    button.onclick = function(){
        if (validar.includes(false)){
            alert ('There are invalids inputs. Please correct and send again.')
        }else{
            alert('Email: ' + validarEmail.value + '\n + Password: ' + validarPassword.value);
        }
    }
}