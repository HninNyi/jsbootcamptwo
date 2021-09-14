//UI
const progress = document.getElementById('progress');
const circles=document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const image = document.getElementById('image');
const name = document.getElementById('name');
const bddate = document.getElementById('birthdate');
const bdplace = document.getElementById('birthplace');

console.log(bddate);

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
    memberbiodetails();
});

prev.addEventListener('click',()=>{
    currentactive--;

    if(currentactive<1){
        currentactive=1;
    }
    // console.log(currentactive);
    update();
    memberbiodetails();
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

function memberbiodetails(){
    circles.forEach((circle,index)=>{

        if(currentactive===1){
            image.setAttribute("src","img/bts.jpg");
            name.innerText="BTS(방탄소년단)";
            bddate.innerText ="Debut Date : June 13, 2013";
            bdplace.innerText= "South Korea Boy Group";
        }else if(currentactive===2){
           image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250770042-WWIKJY6U1RSQC4ZIHJJY/0000072728_001_20201218084659004.jpg?format=1000w");
            name.innerText="Name : 김남준(RM)";
            bddate.innerText ="Birth Date : September 12, 1994";
            bdplace.innerText= "Birth Place : Dongjak-gu, Seoul, South Korea";
       }else if(currentactive===3){
           image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250776655-LEDGCC9LAG1ZKLD0BQQZ/0000072733_001_20201218084702397.jpg?format=1000w");
           name.innerText="Name : 김석진(Jin)";
           bddate.innerText ="Birth Date : December 4, 1992";
           bdplace.innerText= "Birth Place : Gwacheon, Gyeonggi, South Korea";

       }else if(currentactive===4){
            image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250758395-A2OYT0Y0X9CBMH610N4Z/0000072716_001_20201218084650986.jpg?format=1000w");
            name.innerText="Name : 민윤기(Suga)";
            bddate.innerText ="Birth Date : March 3, 1993";
            bdplace.innerText= "Birth Place : Bak District, Daegu, South Korea";

        }else if(currentactive===5){
            image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250766359-DI0COHJC4SHJSB2XTTQU/0000072724_001_20201218084656437.jpg?format=1000w");
            name.innerText="Name : 정호석(J Hope)";
            bddate.innerText ="Birth Date : February 18, 1994";
            bdplace.innerText= "Birth Place : Bak District, Gwangju, South Korea";

        }else if(currentactive===6){
            image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250783544-5WF5MI1L2WNSMAEEA70J/0000072739_001_20201218084706383.jpg?format=1000w");
            name.innerText="Name : 박지민(Jimin)";
            bddate.innerText ="Birth Date :October 13, 1995";
            bdplace.innerText= "Birth Place : Geumjeong District, Busan, South Korea";

        }else if(currentactive===7){
            image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250755149-1VE3QGMK6GXK0OG2P30N/0000072713_001_20201218084649046.jpg?format=1000w");
            name.innerText="Name : 김태형(V)";
            bddate.innerText ="Birth Date : December 30, 1995";
            bdplace.innerText= "Birth Place : Seo District, Daegu, South Korea";

        }else if(currentactive===8){
            image.setAttribute("src","https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1608250763253-2NWS8WVISB1L6HSTPW96/0000072721_001_20201218084654572.jpg?format=1000w");
            name.innerText="Name : 전정국(Jung Kook)";
            bddate.innerText ="Birth Date : September 1, 1997";
            bdplace.innerText= "Birth Place : Busan, South Korea";

        }

    });

}

// update();

