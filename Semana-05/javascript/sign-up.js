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
    

    //
    var validarSurname = document.getElementById('surname-input');
    var validarID = document.getElementById('ID-input');
    var validarBirth = document.getElementById('birth-input');
    var validarPhone = document.getElementById('phone-input');
    var validarAddress = document.getElementById('address-input');
    var validarCity = document.getElementById('city-input');
    var validarPostcode = document.getElementById('postcode-input');
    var validarEmail = document.getElementById('email-input');
    var validarPassword = document.getElementById('password-input');
    var validarPassword2 = document.getElementById('password2-input');
}