window.onload = function(){
    function onlyLetters(word){
        for (i=0; i<word.length; i++){
            if ((word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90)||
            (word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122)){
            }else{
                return false;
            }
        }
        return true;
    }
    
    function onlyNumbers(word){
        for (i=0; i<word.length; i++){
            if (word.charCodeAt(i)>=48 && word.charCodeAt(i)<=57){
            }else{
                return false;
            }
        }
        return true;
    }

    function NumAndLett(word){
        for (i=0; i<word.lenght; i++){
            if ((word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90)||
            (word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122)||
            (word.charCodeAt(i)>=48 && word.charCodeAt(i)<=57)){
            }else{
                return false;
            }
        }
        return true;
    }

    var validar = [];

    var validarName = document.getElementById('name-input');
    var nameAlert = document.createElement('p');
    nameAlert.innerHTML = 'Name is too short';
    nameAlert.style.color = 'red';
    var nameDiv = document.getElementById('name');
    
    validarName.onfocus = function(){
        nameDiv.removeChild(nameAlert);
    }
    
    validarName.onblur = function(){
        if (onlyLetters(validarName.value) && validarName.value.length>=3){
            validarName.style.border = '2px solid #363867';
            validar[0] = true;
        }else{
            validarName.style.border = '2px solid red';
            nameDiv.appendChild(nameAlert);
            validar[0] = false;
        }
    }

    var validarSurname = document.getElementById('surname-input');
    var surnameAlert = document.createElement('p');
    surnameAlert.innerHTML = 'Surname is too short';
    surnameAlert.style.color = 'red';
    var surnameDiv = document.getElementById('surname');

    validarSurname.onfocus = function(){
        surnameDiv.removeChild(surnameAlert);
    }

    validarSurname.onblur = function(){
        if (onlyLetters(validarSurname.value) && validarSurname.value.length>=3){
            validarSurname.style.border = '2px solid #363867';
            validar[1] = true;
        }else{
            validarSurname.style.border = '2px solid red';
            surnameDiv.appendChild(surnameAlert);
            validar[1] = false;
        }
    }

    var validarID = document.getElementById('ID-input');
    var idAlert = document.createElement('p');
    idAlert.innerHTML = 'ID has to be at least 8 numbers long';
    idAlert.style.color = 'red';
    var idDiv = document.getElementById('ID');

    validarID.onfocus = function(){
        idDiv.removeChild(idAlert);
    }

    validarID.onblur = function(){
        if (onlyNumbers(validarID.value) && validarID.value.length>7){
            validarID.style.border = '2px solid #363867';
            validar[2] = true;
        }else{
            validarID.style.border = '2px solid red';
            idDiv.appendChild(idAlert);
            validar[2] = false;
        }
    }

    var validarBirth = document.getElementById('birth-input');
    var birthAlert = document.createElement('p');
    birthAlert.innerHTML = 'Date of birth is required';
    birthAlert.style.color = 'red';
    var birthDiv = document.getElementById('birth');

    validarBirth.onfocus = function(){
        birthDiv.removeChild(birthAlert);
    }

    validarBirth.onblur = function(){
        if (!isNaN(Date.parse(validarBirth.value))){
            validarBirth.style.border = '2px solid #363867';
            validar[3] = true;
        }else{
            validarBirth.style.border = '2px solid red';
            birthDiv.appendChild(birthAlert);
            validar[3] = false;
        }
    }

    var validarPhone = document.getElementById('phone-input');
    var phoneAlert = document.createElement('p');
    phoneAlert.innerHTML = 'Phone number has to be ten numbers long'
    phoneAlert.style.color = 'red';
    var phoneDiv = document.getElementById('phone');

    validarPhone.onfocus = function(){
        phoneDiv.removeChild(phoneAlert);
    }

    validarPhone.onblur = function(){
        if (onlyNumbers(validarPhone.value) && validarPhone.value.length==10){
            validarPhone.style.border = '2px solid #363867';
            validar[4] = true;
        }else{
            validarPhone.style.border = '2px solid red';
            phoneDiv.appendChild(phoneAlert);
            validar[4] = false;
        }
    }

    var validarAddress = document.getElementById('address-input');
    var addressAlert = document.createElement('p');
    addressAlert.innerHTML = 'Invalid address';
    addressAlert.style.color = 'red';
    var addressDiv = document.getElementById('address');

    validarAddress.onfocus = function(){
        addressDiv.removeChild(addressAlert);
    }

    validarAddress.onblur = function(){
        if (NumAndLett(validarAddress.value) && validarAddress.value.includes(' ') && validarAddress.value.length>=5){
            validarAddress.style.border = '2px solid #363867';
            validar[5] = true;
        }else{
            validarAddress.style.border = '2px solid red';
            addressDiv.appendChild(addressAlert);
            validar[5] = false;
        }
    }

    var validarCity = document.getElementById('city-input');
    var cityAlert = document.createElement('p');
    cityAlert.innerHTML = 'City non valid';
    cityAlert.style.color = 'red';
    var cityDiv = document.getElementById('city');

    validarCity.onfocus = function(){
        cityDiv.removeChild(cityAlert);
    }

    validarCity.onblur = function(){
        if (NumAndLett(validarCity.value) && validarCity.value.length>3){
            validarCity.style.border = '2px solid #363867';
            validar[6] = true;
        }else{
            validarCity.style.border = '2px solid red';
            cityDiv.appendChild(cityAlert);
            validar[6] = false;
        }
    }

    var validarPostcode = document.getElementById('postcode-input');
    var postcodeAlert = document.createElement('p');
    postcodeAlert.innerHTML = 'Postcode non valid';
    postcodeAlert.style.color = 'red';
    var postcodeDiv = document.getElementById('postcode');

    validarPostcode.onfocus = function(){
        postcodeDiv.removeChild(postcodeAlert);
    }

    validarPostcode.onblur = function(){
        if (onlyNumbers(validarPostcode.value) && validarPostcode.value.length>=4 && validarPostcode.value.length<=5){
            validarPostcode.style.border = '2px solid #363867';
            validar[7] = true;
        }else{
            validarPostcode.style.border = '2px solid red';
            postcodeDiv.appendChild(postcodeAlert);
            validar[7] = false;
        }
    }

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
            validar[8] = true;
        }else{
            validarEmail.style.border = '2px solid red';
            emailDiv.appendChild(emailAlert);
            validar[8] = false;
        }
    }

    var validarPassword = document.getElementById('password-input');
    var validarPassword2 = document.getElementById('password2-input');
    var passwordAlert = document.createElement('p');
    passwordAlert.innerHTML = 'Password has to be 8 characters long or more';
    passwordAlert.style.color = 'red';
    var passwordAlert2 = document.createElement('p');
    passwordAlert2.innerHTML = 'Password must be the same';
    passwordAlert2.style.color = 'red';
    var passwordDiv = document.getElementById('password');
    var password2Div = document.getElementById('password2');

    validarPassword.onfocus = function(){
        passwordDiv.removeChild(passwordAlert);
    }

    validarPassword.onblur = function(){
        if (validarPassword.value.length >= 8){
            validarPassword.style.border = '2px solid #363867';
            validar[9] = true;
        }else{
            validarPassword.style.border = '2px solid red';
            passwordDiv.appendChild(passwordAlert);
            validar[9] = false;
        }
    }

    validarPassword2.onfocus = function(){
        password2Div.removeChild(passwordAlert2);
    }

    validarPassword2.onblur = function(){
        if(validarPassword2.value.length >= 8 && validarPassword.value === validarPassword2.value){
            validarPassword2.style.border = '2px solid #363867';
            validar[10] = true;
        }else{
            validarPassword2.style.border = '2px solid red';
            password2Div.appendChild(passwordAlert2);
            validar[10] = false;
        }
    }

    var button = document.getElementById('button-send');
    
    button.onclick = function(){
        if (validar.includes(false)){
            alert ('There are invalids inputs. Please correct and send again.')
        }else{
            alert('Name: ' + validarName.value + '\nSurname: ' + validarSurname.value + '\nID: ' + validarID.value +
            '\nBirth date: ' + validarBirth.value + '\nPhone number: ' + validarPhone.value + '\nAddress: ' +
            validarAddress.value + '\nCity: ' + validarCity.value + 'Post code: ' + validarPostcode.value +
            '\nEmail: ' + validarEmail.value + '\nPassword: ' + validarPassword.value);
        }
    }
}