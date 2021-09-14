const buttons = document.querySelectorAll('.btnripple');

// console.log(buttons);

buttons.forEach(function(button){
   // console.log(button);

   button.addEventListener('click',function(e){
      // console.log('ji');

   const cx=e.clientX;
   const cy=e.clientY;
   // console.log(cx,cy);

      const btntop = e.target.offsetTop;
      const btnleft = e.target.offsetLeft;
      // console.log(btntop,btnleft);

      const xinside= cx - btnleft;
      const yinside= cy- btntop;
      // console.log(xinside,yinside);

      // Create Circle
      const circle= document.createElement('span');
      circle.classList.add('circle');
      // console.log(circle);

      circle.style.top = yinside+'px';
      circle.style.left=xinside+'px';

      e.target.appendChild(circle);

      setTimeout(()=>{
         circle.remove();
      },400);

   });

});

