'use strict';



localStorage.setItem('email', 'newUser@gmail.com');
localStorage.setItem('password', 'newUser1234');


let button = document.querySelector('.btn-1');
let error = document.querySelector('.error')

function getInfo() {
    let userName = document.querySelector('.email');
    let passWord = document.querySelector('.password');
    let correctEmail = localStorage.getItem('email');
    let correctPassword = localStorage.getItem('password');

        if (userName.value === correctEmail && passWord.value === correctPassword) {
          location.href = '../home.html';
            console.log('Hey there');
        } else error.innerHTML = '*Incorrect username or password*'
}


button.addEventListener ('click', () =>{
  getInfo();
});

