'use strict';





let button = document.querySelector('.btn-1');

let error = document.querySelector('.error')

function getInfo() {
    let userName = document.getElementById('email');
    let passWord = document.getElementById('password');
    localStorage.setItem('email', 'newUser1234');
    localStorage.setItem('password', '1234UserNew');

    let correctEmail = localStorage.getItem('email');
    let correctPassword = localStorage.getItem('password');

        if (userName.value === correctEmail && passWord.value === correctPassword) {
          window.location.replace('./home.html');
            console.log('Hey there');
        } else error.innerHTML = '*Incorrect username or password*'
}


button.addEventListener ('click', () =>{
  getInfo();
});



