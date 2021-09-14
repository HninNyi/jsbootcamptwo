//UI
const progress = document.getElementById('progress');
const circles=document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');



let currentactive = 1;

// Event Listener
next.addEventListener('click',()=>{
    // console.log("hey");
    currentactive++;

    if(currentactive > circles.length){
        currentactive=circles.length;
    }

    // console.log(currentactive);

    update();
});

prev.addEventListener('click',()=>{
    currentactive--;

    if(currentactive<1){
        currentactive=1;
    }
    // console.log(currentactive);
    update();
});

function update(){
    circles.forEach((circle,index)=>{
        // console.log(circle);

        if(index<currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

        if(currentactive === 1){
            prev.disabled =true;

        }else if (currentactive===circles.length){
            next.disabled=true;
        }
        else{
            prev.disabled=false;
            next.disabled=false;
        }


        const actives=document.querySelectorAll('.active');
        // console.log(actives);
        let act = actives.length-1;
        let cls = circles.length-1;
        // console.log(act);

        // console.log((act/cls)*100);
        //33% and 66%

        progress.style.width = ((act/cls)*100 + "%");

    });
}

// update();

