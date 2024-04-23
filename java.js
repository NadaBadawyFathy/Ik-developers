// Toggle menu
let menu = document.querySelector('.toggle-menu');
let ul = document.querySelector('ul');

menu.onclick = function (){
    if (ul.className === 'hidden'){
        ul.className = 'show';
        menu.setAttribute('class','fa-solid fa-xmark toggle-menu c-white');
        menu.style.fontSize = '30px';
    }else {
        ul.className = 'hidden';
        menu.setAttribute('class','fa-solid fa-bars toggle-menu c-white');
        menu.style.fontSize = '25px';
    }
}


// services

let li = document.querySelectorAll('.bullets li');
let box = document.querySelectorAll('.services .container .box');

li.forEach(function (ele) {
    ele.onclick = function () {
        li.forEach(function (ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active');
        let str = this.classList.item(0);
        box.forEach(function (ele) {
            if (ele.classList.contains(str)){
                box.forEach(function (ele) {
                    ele.classList.remove('active');
                })
            ele.classList.add('active');
            }
        })
    }
})

