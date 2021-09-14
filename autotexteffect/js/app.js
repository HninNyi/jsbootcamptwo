const textel=document.getElementById('text');
const speedel = document.getElementById('speed');

// console.log(speedel);

const text = "Lorem ipsum is these words tell the brain to focus all attention on the visual design and safely ignore the content. The purpose of lorem ipsum is to create a natural looking, though nonsensical, text that doesn’t distract from the layout. ";

let idx =1;
let speed = 100;

function autotext(){
    // console.log("heu");

    textel.innerText=text.slice(0,idx);

    idx++;


    if(idx > text.length){
        idx = 1;
    }

    setTimeout(autotext,speed);

}

autotext();

// Event Listener 
speedel.addEventListener('click',()=>{
    // console.log("Hey");
    speed= 2000/speedel.value ;
     
});