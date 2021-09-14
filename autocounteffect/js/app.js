const counters=document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach(counter=>{
    // console.log(counter);

    counter.innerText="0";

    const updatecounter = ()=>{
        // console.log(/"hey"); 

        //change from string to number type
        const target = +counter.getAttribute('data-target');
        // console.log(typeof(target));

        const ctr = Number(counter.innerText);
        // console.log(typeof ctr , ctr);

        const increment = target/100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText = Math.ceil(ctr + increment);
            setTimeout(updatecounter,10);
        }


    };

    updatecounter();



});



// Data Land acc  29L2 WDF 2008