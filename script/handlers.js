// Part 1
let btn = document.querySelector('#mybutton');

btn.addEventListener('click', function(e){
    console.log(e);
    let userName = prompt('Get your own name in the button\nEnter your name');
    document.getElementById('mybutton').innerHTML = userName;
})

// Part 2
let bgBtn = document.getElementById('bg-btn');
let body = document.querySelector('body');

bgBtn.addEventListener('click', function(h){
    console.log(h.target);
    console.log(h);
    body.style.background = 'red';
})

// Part 3
let toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', function(a){
    console.log(a.target);
    console.log(a);
    body.classList.toggle('red-background')
})

// Extra
let refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', function(){
    location.reload()
})