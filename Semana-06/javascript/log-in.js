window.onload = function (){
    var validar = [];

    var generalAlert = document.createElement('p');
    generalAlert.innerHTML = 'This field must be filled';
    generalAlert.style.color = 'red';
    
    var validarEmail = document.getElementById('email-input');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailAlert = document.createElement('p');
    emailAlert.innerHTML = 'Invalid email';
    emailAlert.style.color = 'red';
    var emailDiv = document.getElementById('email');

    validarEmail.onfocus = function(){
        emailDiv.removeChild(generalAlert);
        emailDiv.removeChild(emailAlert);
    }

    validarEmail.onblur = function(){
        if(validarEmail.value === ''){
            validarEmail.style.border = '2px solid red';
            emailDiv.appendChild(generalAlert);
            validar[0] = false;
        }else if (emailExpression.test(validarEmail.value)){
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
        passDiv.removeChild(generalAlert);
        passDiv.removeChild(passAlert);
    }

    validarPassword.onblur = function(){
        if (validarPassword.value === ''){
            validarPassword.style.border = '2px solid red';
            passDiv.appendChild(generalAlert);
            validar[1] = false;
        }else if (validarPassword.value.length >= 8){
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
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + validarEmail.value +
            '&password=' + validarPassword.value)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    if (data.success){
                        alert(data.msg + '\nEmail: ' + validarEmail.value + '\nPassword: ' + validarPassword.value);
                        localStorage.setItem('email', validarEmail.value);
                        localStorage.setItem('password', validarPassword.value);
                    }else{
                        alert(data.msg);
                    }
                })
                .catch(function(){
                    alert('There has been an error. Try again.')
                })
        }
    }
}