const form = document.getElementById('form');
const usermane = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput([usermane, email, password, password2]);

    if(!validateEmail(email.value.trim())){
        showerror(email, 'Invalid email')
    }
    else{
        showsuccess(email);
    }
    checkPassword(password, password2);
    checkInputLength(usermane, 5, 10);
    checkInputLength(password, 5, 12);
})

function showerror(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showsuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showerror(input, `Fill ${getInputCase(input)}`);
        }else{
            showsuccess(input);
        }
    });
}
function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkPassword(password1, password2){
    if(password1.value !== password2.value){
        showerror(password2, 'Password is not match');
    }
}
function checkInputLength(input, min, max){
    if(input.value.length <= min){
        showerror(input, `${getInputCase(input)} > ${min}`);
    }else if(input.value.length >= max){
        showerror(input, `${getInputCase(input)} < ${max}`);
    }else{
        showsuccess(input);
    }
}

