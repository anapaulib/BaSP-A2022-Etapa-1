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

    function space (word){
        for (i=0; i<word.length; i++){
            if (word.charCodeAt(i) == 32){
            }else{
                return false;
            }
        }
        return true;
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
            validarName.style.border = '2px solid #363867';
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
            validarSurname.style.border = '2px solid #363867';
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
            validarID.style.border = '2px solid #363867';
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
            validarPhone.style.border = '2px solid #363867';
        }else{
            validarPhone.style.border = '2px solid red';
            phoneDiv.appendChild(phoneAlert);
        }
    }

    //ADDRESS
    var validarAddress = document.getElementById('address-input');
    var addressAlert = document.createElement('p');
    addressAlert.innerHTML = 'Address non valid';
    addressAlert.style.color = 'red';
    var addressDiv = document.getElementById('address');

    validarAddress.onfocus = function(){
        addressDiv.removeChild(addressAlert);
    }

    validarAddress.onblur = function(){
        if ((onlyLetters(validarAddress.value) || onlyNumbers(validarAddress.value)) && space(validarAddress.value)
        && validarAddress.value.length>=5){
            validarAddress.style.border = '2px solid #363867';
        }else{
            validarAddress.style.border = '2px solid red';
            addressDiv.appendChild(addressAlert);
        }
    }

    //CITY
    var validarCity = document.getElementById('city-input');
    var cityAlert = document.createElement('p');
    cityAlert.innerHTML = 'City non valid';
    cityAlert.style.color = 'red';
    var cityDiv = document.getElementById('city');

    validarCity.onfocus = function(){
        cityDiv.removeChild(cityAlert);
    }

    validarCity.onblur = function(){
        if ((onlyLetters(validarCity.value) || onlyNumbers(validarCity.value)) && validarCity.value.length>3){
            validarCity.style.border = '2px solid #363867';
        }else{
            validarCity.style.border = '2px solid red';
            cityDiv.appendChild(cityAlert);
        }
    }

    //POSTCDE
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
        }else{
            validarPostcode.style.border = '2px solid red';
            postcodeDiv.appendChild(postcodeAlert);
        }
    }

    //EMAIL
    var validarEmail = document.getElementById('email-input');

    //PASSWORD
    var validarPassword = document.getElementById('password-input');
    var validarPassword2 = document.getElementById('password2-input');
}