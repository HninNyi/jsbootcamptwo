//UI
const left = document.getElementById('left');
const right = document.getElementById('right');
const imgcarousel= document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');

// console.log(imgs);

let idx=0;

left.addEventListener('click',()=>{
   idx--;
   // console.log(idx);
    changeimage();
    resetinterval();
});


right.addEventListener('click', ()=>{
   idx++;
   changeimage();
   resetinterval();

});

function changeimage(){

    if(idx > imgs.length -1 ){
        idx=0;
    }else if(idx<0){
        idx=imgs.length -1 ;
    }

    // console.log(idx);

    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}


let interval = setInterval(imgrun,2000);

function imgrun(){
    idx++;
    changeimage();
}


function resetinterval(){
    clearInterval(interval);
    interval= setInterval(imgrun,2000);
}
