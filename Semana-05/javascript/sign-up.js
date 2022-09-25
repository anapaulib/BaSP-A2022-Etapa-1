window.onload = function(){
    function onlyLetters(word){
        for (i=0; i<word.length; i++){
            if ((word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90)||(word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122)){
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

    function space (word){
        for (i=0; i<word.length; i++){
            if (word.charCodeAt(i) == 32){
                return true;
            }
        }
        return false;
    }

    //NAME
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
        }else{
            validarName.style.border = '2px solid red';
            nameDiv.appendChild(nameAlert);
        }
    }

    //SURNAME
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
        }else{
            validarSurname.style.border = '2px solid red';
            surnameDiv.appendChild(surnameAlert);
        }
    }

    //ID
    var validarID = document.getElementById('ID-input');
    var idAlert = document.createElement('p');
    idAlert.innerHTML = 'ID non valid'
    idAlert.style.color = 'red';
    var idDiv = document.getElementById('ID');

    validarID.onfocus = function(){
        idDiv.removeChild(idAlert);
    }

    validarID.onblur = function(){
        if (onlyNumbers(validarID.value) && validarID.value.length>7){
        }else{
            validarID.style.border = '2px solid red';
            idDiv.appendChild(idAlert);
        }
    }

    //BIRTH DATE
    var validarBirth = document.getElementById('birth-input');

    //PHONE NUMBER
    var validarPhone = document.getElementById('phone-input');
    var phoneAlert = document.createElement('p');
    phoneAlert.innerHTML = 'Phone number non valid'
    phoneAlert.style.color = 'red';
    var phoneDiv = document.getElementById('phone');

    validarPhone.onfocus = function(){
        phoneDiv.removeChild(phoneAlert);
    }

    validarPhone.onblur = function(){
        if (onlyNumbers(validarPhone.value) && validarPhone.value.length==10){
        }else{
            validarPhone.style.border = '2px solid red';
            phoneDiv.appendChild(phoneAlert);
        }
    }
    
    //ADDRESS
    var validarAddress = document.getElementById('address-input');

    //CITY
    var validarCity = document.getElementById('city-input');

    //POSTCDE
    var validarPostcode = document.getElementById('postcode-input');

    //EMAIL
    var validarEmail = document.getElementById('email-input');

    //PASSWORD
    var validarPassword = document.getElementById('password-input');
    var validarPassword2 = document.getElementById('password2-input');
}