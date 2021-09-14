const quizdata = [
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Century System Software",
        e:"Control Style Sheet",
        correct:"b",
    },
    {
        question:"What does HTML stand for?",
        a:"Hyper Text Markup Language",
        b:"Hyper Text Markdown Language",
        c:"Hyper Text Machine Language",
        d:"Hyper Technology Markup Language",
        e:"Hyper Text Market Language",
        correct:"a",
    },
    {
        question:"What year was Javascript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1993",
        e:"none of the above",
        correct:"b",
    },
    {
        question:"Which language runs in a browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        e:"Php",
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

loadquiz();

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
            quiz.innerHTML=`<h2>You answered correct at ${score} / ${quizdata.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});

// 26QUI WDF2008


// console.log(quizdata[0].correct);

// getselected();