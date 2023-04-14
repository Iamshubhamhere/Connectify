'use strict';




const url = 'https://randomuser.me/api/?nat=CA&results=10';

let colThree = document.querySelector('.rightBox');
let listItems = [];


getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api/?nat=CA&results=10');
    const {results} = await res.json()

    colThree.innerHTML = ''

    results.forEach(friend => {
        const li = document.createElement('li');

        listItems.push(li)

        li.innerHTML = `
        <div class="well">
        <img src="${friend.picture.medium}" class="img">
        <span style="color="#000">${friend.name.title} ${friend.name.first} ${friend.name.last}</span>
        <span style="color="#000">(${friend.location.city})
        <img class="add" src="./assets/image/add.png">
        </div>
    `;
    colThree.appendChild(li)
    })
}