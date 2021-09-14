// UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right=document.getElementById('right');

// console.log(slides);
// console.log(background);

let activeslide=0;

function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;

}

setbody();

function setactiveslide(){
    // slides.forEach((slide)=>{
    //     // console.log(slide);
    //     slide.classList.remove('active');
    // });

    slides.forEach(slide=>slide.classList.remove('active'));


    slides[activeslide].classList.add('active');
}


right.addEventListener('click',function (){
    // console.log('afa');
    activeslide++;

    if(activeslide > slides.length - 1){
        activeslide=0;

        // console.log(activeslide)
    }
    setbody();
    setactiveslide();

});

left.addEventListener('click',function (){
    // console.log('afa');
    activeslide--;

    if(activeslide < 0){

        activeslide= slides.length - 1;

        // console.log(activeslide)
    }
    setbody();
    setactiveslide();

});

