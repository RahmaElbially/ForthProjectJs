let openBtn = document.querySelector(".open");

let closeBtn = document.querySelector(".close");

let overLay = document.querySelector(".overLay");

// add Event Listener

// Open Over Lay When Click On The Button.

openBtn.addEventListener('click', function(){
    overLay.classList.add('openLay')
});


// Close Over Lay When Click On The Colse Icon .


closeBtn.addEventListener('click', ()=>{
    overLay.classList.remove('openLay')
})
