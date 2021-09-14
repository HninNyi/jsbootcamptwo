const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles)

gettoggles.forEach((toggle)=>{
   toggle.addEventListener('click',()=>{
       // console.log('fds');
       toggle.parentElement.classList.toggle('active');
       // toggle() fun is for both adding active and removing active
   }) ;
});