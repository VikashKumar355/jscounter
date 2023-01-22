let x = document.getElementById('number');
let y = 0;

function increment(){
    y = y + 1;
    x.innerHTML=y;
}

function decrement(){
    y = y -1;
    x.innerHTML = y;
}

function neutral(){
    y = 0;
    x.innerHTML = y;
}