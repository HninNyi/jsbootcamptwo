//UI
const boxes = document.querySelectorAll('.box');

function checkboxes(){
    // console.log(window.innerHeight);
    const innerheight= window.innerHeight / 5 * 4;
    // console.log(innerheight);

    boxes.forEach(box=>{

        const boxtop= box.getBoundingClientRect().top;
        // console.log(boxtop);

        if(boxtop < innerheight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });

}



checkboxes();

window.addEventListener('scroll',checkboxes);


// 17GBCR WDF2008