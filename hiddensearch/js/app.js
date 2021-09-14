//UI
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

btn.addEventListener('click',()=>{
    // console.log("fsal");
    search.classList.toggle('active');
    input.focus();
});


// 5FOCUS WDF2008