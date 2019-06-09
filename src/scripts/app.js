// import 'aos';
// konami code
const pressed = [];
const code = "bensbagels";
// let frameCount = 0;

//Konami Code Begins
const finishbagels = () => {
   let bagel = document.getElementById("bagel-container");
   bagel.className = "hide";
}

const trigger = () => {
   console.log('HAPPENING');
   setTimeout(
      
      function () {
         finishbagels();
      }, 10000);
}

const startbagels = () => {
   let bagel = document.getElementById("bagel-container");
   bagel.className = "show";
   trigger();

}
window.addEventListener("keyup", function (e) {
   pressed.push(e.key);
   pressed.splice(-code.length - 1, pressed.length - code.length);
   console.log(pressed)

   if (pressed.join("").includes(code)) {
      startbagels();
   }
});
//Konami code ends

// const $portfolio1 = $('.portfolioPiece1');
// const $win = $(window);

// $win.on('scroll', function (){
//       let top = $win.scrollTop() / 20;
//       $portfolio1.css('transform', 'translateX(-' + top + 'px)');
// });

$(function (){
      $('a').smoothScroll();
      AOS.init({
            duration: 1500,
      });
})
