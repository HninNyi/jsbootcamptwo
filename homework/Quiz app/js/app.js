const quizdata = [
    {
        question:"Who was the first member to join BTS?",
        a:"RM",
        b:"SUGA",
        c:"JIN",
        d:"J-HOPE",
        e:"JUNGKOOK",
        correct:"a",
    },
    {
        question:"Who was the last member to join BTS?",
        a:"V",
        b:"JUNGKOOK",
        c:"JIMIN",
        d:"JIN",
        e:"RM",
        correct:"c",
    },
    {
        question:"\"Spring Day\" is the title track off which album?",
        a:"Youth",
        b:"The Most Beautiful moment in Life:Young Forever",
        c:"Love Yourself:Answer",
        d:"You Never Walk Alone",
        e:"none of the above",
        correct:"d",
    },
    {
        question:"Which choreography involves Jimin flipping over J-Hope?",
        a:"Danger",
        b:"ON",
        c:"No More Dream",
        d:"We are Bulletproof Pt.2",
        e:"Idol",
        correct:"d",
    }
];

// console.log(quizdata);

//UI
const quiz= document.getElementById('quiz');
const questions = document.getElementById('question');
const answerels=document.querySelectorAll('.answer');

const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const e_text =document.getElementById('e_text');

const submitbtn = document.getElementById("submit");


let currentquiz =0;
let score =0;



function loadquiz(){

    deselecteanswers();

    const currentquizdata = quizdata[currentquiz];
    // console.log(currentquizdata);
    questions.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
    e_text.innerText=currentquizdata.e;


}



function deselecteanswers(){
    answerels.forEach((answerel)=>answerel.checked=false);
}

function getselected(){
    let answer;

    answerels.forEach((answerel)=>{
        // console.log(answerel);
        if(answerel.checked){
            answer= answerel.id;
            // console.log(answer);

        }

    });

    return answer;
}

submitbtn.addEventListener('click' ,()=>{

    // console.log("fasfd");
    // console.log(getselected());

    let answer = getselected();

    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;

        if(currentquiz < quizdata.length){
            loadquiz();
        }else{
            if(score===quizdata.length){
                quiz.innerHTML=` <img src="https://i.pinimg.com/originals/c2/52/08/c25208508f5a3d1ada8feab3a503fe46.gif" style="width:300px height:300px">
                             <h2>You answered correct at ${score} / ${quizdata.length} questions</h2>
                             <button onclick="location.reload()">Reload</button>`;
            }else{
                quiz.innerHTML=` <img src="https://i.imgur.com/iFQjWkx.gif" style="width:300px height:300px">
                             <h2>You answered correct at ${score} / ${quizdata.length} questions</h2>
                             <button onclick="location.reload()">Reload</button>`;

            }

        }
    }
});

const btn =document.querySelector('button');
const form=document.getElementById('form');
// console.log(form);
// console.log(btn);
btn.addEventListener('click',()=>{
    loadquiz();
    // console.log(quiz.classList);
    quiz.classList.add('login');
    form.classList.add("login");
});

const labels = document.querySelectorAll('.form-control label');
// console.log(labels);

labels.forEach((label)=>{
    // console.log(label);
    // console.log(label.textContent);
    // console.log(label.innerText.split());
    // console.log(label.innerText.split(''));

    label.innerHTML= label.innerText
        .split('')
        .map((letter,index)=>
            `<span style="transition-delay: ${index*50}ms" >${letter}</span>`).join('');


});