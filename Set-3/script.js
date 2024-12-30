const clock = document.getElementById('clock');

// let date = new Date();


setInterval(function (){
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}, 1000)