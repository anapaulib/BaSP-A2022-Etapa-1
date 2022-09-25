window.onload = function (){
    var inputs = document.querySelectorAll ('input');

    for (i = 0; i < inputs.length; i++){
        inputs[i].onfocus = function(){
            inputs[i].style.border = '2px solid black';
        }
    }

    inputs[0].onblur = function(){

    }

    inputs[1].onblur = function(){
        if(inputs[1].value.length<8){
            inputs[1].style.border = '2px solid red';
            var passAlert = document.createElement('p');
            passAlert.innerHTML = 'Password has to be 8 characters long or more';
            passAlert.style.color = 'red';
            var passDiv = document.getElementById('password');
            passDiv.appendChild(passAlert);
            inputs[1].onfocus = function(){
                passDiv.removeChild(passAlert);
            }
        }
    }
}