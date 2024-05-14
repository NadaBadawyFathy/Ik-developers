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

let li = document.querySelectorAll('.services .bullets li');
let box = document.querySelectorAll('.services .container .box');

li.forEach(function (ele) {
    ele.onclick = function () {
        li.forEach(function (ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active');
        let str = this.classList.item(0);
        box.forEach(function (ele) {
        ele.classList.remove('active');
        })
        box[+str].classList.add('active')
    }
})

// Arrows
let i = document.querySelectorAll('.leading .container .arrows i');

i.forEach(function (el) {
    el.onclick = function () {
        i.forEach(function (ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active')
    }
})

// Cutomers

let bo = document.querySelectorAll('.cutomers .container .box');
let arr = document.querySelectorAll('.cutomers .container .arr i');
let index = 0;
let counter = setInterval(function () {
    index++;
    if (index === bo.length) {
        index = 0;
    }
    if (!bo[index].classList.contains('active')){
        bo.forEach(function (e) {
            e.classList.remove('active');
        })
        bo[index].classList.add('active');
    }
}, 3000);


arr.forEach(function (e) {
    // click arrow left or right
    e.onclick = function (e) {
        clearInterval(counter)
        arr.forEach(function (e) {
            e.classList.remove('active');
        })
        this.classList.add('active');

        // arrow right
        if (this.classList.contains('right')){
            ++index;
        if (index === bo.length) {
            index = 0;
        }
        bo.forEach(function (el) {
            el.classList.remove('active');
        })
        bo[index].classList.add('active');

        }

        // arrow left
        if (this.classList.contains('left')){
            --index;
            if (index < 0) {
                index = bo.length - 1 ;
            }
            bo.forEach(function (el) {
                el.classList.remove('active');
            })
            bo[index].classList.add('active');
        }
    }
})

// Tech Stack
let tracks = document.querySelectorAll('.tech-stack .container ul li');
let imgs = document.querySelectorAll('.tech-stack .container .imgs li');

tracks.forEach(function (e) {
    e.onclick = function (e) {
        tracks.forEach(function (e) {
            e.classList.remove('active');
        })
        this.classList.add('active')
        let str = this.classList.item(0);
        imgs.forEach(function (ele) {
        ele.classList.remove('active');
        })
        imgs[+str].classList.add('active')
    }
})

// Features

let bul = document.querySelectorAll('.features .bullets li');
let feat = document.querySelectorAll('.features .container .box');

bul.forEach(function (ele) {
    ele.onclick = function () {
        bul.forEach(function (ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active');
        let str = this.classList.item(0);
        feat.forEach(function (ele) {
        ele.classList.remove('active');
        })
        feat[+str].classList.add('active')
    }
})