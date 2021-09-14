const loveme = document.getElementById('img-div');
const times = document.querySelector('#times');
const giveheart = document.getElementById('give-heart');

console.log(loveme);
   
   let clicktimes= 0;

   loveme.addEventListener('click',(e)=>{
       console.log('nfkans');
   
       if(clicktimes === 0){
           clicktimes= new Date().getTime();
           // console.log(clicktimes);
       }else{
           if((new Date().getTime() - clicktimes) < 1000){
               createheart(e);
   
               clicktimes=0;
           }else{
               clicktimes= new Date().getTime();
           }
       }
   
   });



    const createheart = (e)=>{
       const heart = document.createElement('i');
       heart.className ='fas fa-heart';


       const cx= e.clientX;
       const cy = e.clientY;
    
       const topoffset = e.target.offsetTop;
       const leftoffset = e.target.offsetLeft;


       const xinside = cx-leftoffset;
       const yinside= cy- topoffset;

       heart.style.top = `${yinside}px`;
       heart.style.left = `${xinside}px`;

       loveme.appendChild(heart);

       setTimeout(()=>heart.remove(),1000);
    };











//
// // const body = document.body;
// // const slides = document.querySelectorAll('.slide');
// const left = document.getElementById('left');
// const right=document.getElementById('right');
//
// // console.log(slides);
// // console.log(background);
//
// let activeslide=0;
//
//
//
//
// function setactiveslide(){
//     // slides.forEach((slide)=>{
//     //     // console.log(slide);
//     //     slide.classList.remove('active');
//     // });
//
//     lovemes.forEach(slide=>slide.classList.remove('active'));
//
//
//     lovemes[activeslide].classList.add('active');
// }
//
//
// right.addEventListener('click',function (){
//     // console.log('afa');
//     activeslide++;
//
//     if(activeslide > lovemes.length - 1){
//         activeslide=0;
//
//         // console.log(activeslide)
//     }
//     // setbody();
//     setactiveslide();
//
// });
//
// left.addEventListener('click',function (){
//     // console.log('afa');
//     activeslide--;
//
//     if(activeslide < 0){
//
//         activeslide= lovemes.length - 1;
//
//         // console.log(activeslide)
//     }
//     // setbody();
//     setactiveslide();
//
// });