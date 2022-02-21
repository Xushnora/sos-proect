
let elMenuBtn = document.getElementById('menuBtn');
let elModal = document.getElementById('menuOpen');
let elClose = document.getElementById('closeBtn');
let elIcon = document.getElementById('icon');

let count = 0;
elMenuBtn.addEventListener('click', function () {
    elModal.classList.toggle('show');

    if (count == 0) {
        elIcon.className = "bx bx-x";
        count++;
    } else {
        elIcon.className = "bx bx-menu-alt-right";
        count = 0;
    }
});


let elBtnTitle = document.getElementById('featurOpen');
let elOpenText = document.getElementById('featurText');

elBtnTitle.addEventListener('click', function () {
    elOpenText.classList.toggle('test');

});


let elBtnTitle2 = document.getElementById('featurOpen2');
let elOpenText2 = document.getElementById('featurText2');

elBtnTitle2.addEventListener('click', function () {
    elOpenText2.classList.toggle('test');

});

let elBtnTitle3 = document.getElementById('featurOpen3');
let elOpenText3 = document.getElementById('featurText3');

elBtnTitle3.addEventListener('click', function () {
    elOpenText3.classList.toggle('test');

});


// sileder


jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  