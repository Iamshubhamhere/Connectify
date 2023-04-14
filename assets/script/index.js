'use strict';

let email = 'newUser@gmail.com';
let password = 'newUser1234';





let button = document.querySelector('.btn-1');
let error = document.querySelector('.error')

function getInfo() {
    let userName = document.querySelector('#email');
    let passWord = document.querySelector('#password');


        if (userName.value === email && passWord.value === password) {
            window.location.href = '../home.html'
            console.log('Hey there');
        } else error.innerHTML = '*Incorrect username or password*'
}


button.addEventListener ('click', function(){
  getInfo();
});