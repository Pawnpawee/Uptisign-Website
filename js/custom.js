

(function ($) {
	
	"use strict";

	/*// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });*/


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


})(window.jQuery);

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/* left fadeIN
*/

const observerleft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('showleft');
    }
    else {
      entry.target.classList.remove('showleft');

    }
  });
});

const hiddenElementsleft = document.querySelectorAll('.hiddenleft');
hiddenElementsleft.forEach((el) => observerleft.observe(el));

/* right fadeIN
*/

const observerright = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('showright');
    }
    else {
      entry.target.classList.remove('showright');

    }
  });
});

const hiddenElementsright = document.querySelectorAll('.hiddenright');
hiddenElementsright.forEach((el) => observerright.observe(el));

/* Top fadeIN
*/

const observertop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('showtop');
    }
    else {
      entry.target.classList.remove('showtop');

    }
  });
});

const hiddenElementstop = document.querySelectorAll('.hiddentop');
hiddenElementstop.forEach((el) => observertop.observe(el));

/* Top fadeIN
*/

const observertop2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('showtop2');
    }
    else {
      entry.target.classList.remove('showtop2');

    }
  });
});

const hiddenElementstop2 = document.querySelectorAll('.hiddentop2');
hiddenElementstop2.forEach((el) => observertop2.observe(el));

/* Bigger
*/

const observerbigger = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('showbigger');
    }
    else {
      entry.target.classList.remove('showbigger');

    }
  });
});

const hiddenElementsbigger = document.querySelectorAll('.hiddenbigger');
hiddenElementsbigger.forEach((el) => observerbigger.observe(el));


/*******/


  let text = document.getElementById('text');
  let borderbtn = document.getElementById('borderbtn');
  

  window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.marginTop = value* 0.6 +'px';
    borderbtn.style.marginTop = value* 0.25 +'px';
   
  })

  

 // document.querySelector('.close').addEventListener('click',function() {
//   var grand = this.parentNode.parentNode;
//   this.parentNode.parentNode.style.animation = "toast .5s ease-out forwards";
//   setTimeout(() => {grand.remove();} ,500);
// })


document.querySelector('.buttongraphic').addEventListener('click',function() {
  var child = document.getElementById('clonemother');
  var clone = child.cloneNode(true);
  // console.log(clone);
  // document.querySelector('.toast-area').appendChild(child.firstChild);
  var node = document.getElementById("toasts").appendChild(clone);
  console.log(node.childNodes);
 
  setTimeout(function() {
    if(node) {
      node.style.animation = "toast .5s ease-out forwards";
      setTimeout(() => {node.remove();} ,500);
    }
  },2000);
})

document.querySelector('.buttondrawing').addEventListener('click',function() {
  var child = document.getElementById('clonemother2');
  var clone = child.cloneNode(true);
  // console.log(clone);
  // document.querySelector('.toast-area').appendChild(child.firstChild);
  var node = document.getElementById("toasts2").appendChild(clone);
  console.log(node.childNodes);
 
  setTimeout(function() {
    if(node) {
      node.style.animation = "toast .5s ease-out forwards";
      setTimeout(() => {node.remove();} ,500);
    }
  },2000);
})

document.querySelector('.buttonprogramming').addEventListener('click',function() {
  var child = document.getElementById('clonemother3');
  var clone = child.cloneNode(true);
  // console.log(clone);
  // document.querySelector('.toast-area').appendChild(child.firstChild);
  var node = document.getElementById("toasts3").appendChild(clone);
  console.log(node.childNodes);
 
  setTimeout(function() {
    if(node) {
      node.style.animation = "toast .5s ease-out forwards";
      setTimeout(() => {node.remove();} ,500);
    }
  },2000);
})

document.querySelector('.buttonproduction').addEventListener('click',function() {
  var child = document.getElementById('clonemother4');
  var clone = child.cloneNode(true);
  // console.log(clone);
  // document.querySelector('.toast-area').appendChild(child.firstChild);
  var node = document.getElementById("toasts4").appendChild(clone);
  console.log(node.childNodes);
 
  setTimeout(function() {
    if(node) {
      node.style.animation = "toast .5s ease-out forwards";
      setTimeout(() => {node.remove();} ,500);
    }
  },2000);
})


///////////////////

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

//////////////////////////////
///////////////////

const slider2 = document.querySelector(".slider2");
const nextBtn2 = document.querySelector(".next-btn2");
const prevBtn2 = document.querySelector(".prev-btn2");
const slides2 = document.querySelectorAll(".slide2");
const slideIcons2 = document.querySelectorAll(".slide-icon2");
const numberOfSlides2 = slides2.length;
var slideNumber2 = 0;

//image slider next button
nextBtn2.addEventListener("click", () => {
  slides2.forEach((slide2) => {
    slide2.classList.remove("active2");
  });
  slideIcons2.forEach((slideIcon2) => {
    slideIcon2.classList.remove("active2");
  });

  slideNumber2++;

  if(slideNumber2 > (numberOfSlides2 - 1)){
    slideNumber2 = 0;
  }

  slides2[slideNumber2].classList.add("active2");
  slideIcons2[slideNumber2].classList.add("active2");
});

//image slider previous button
prevBtn2.addEventListener("click", () => {
  slides2.forEach((slide2) => {
    slide.classList.remove("active");
  });
  slideIcons2.forEach((slideIcon2) => {
    slideIcon2.classList.remove("active2");
  });

  slideNumber2--;

  if(slideNumber2 < 0){
    slideNumber2 = numberOfSlides2 - 1;
  }

  slides2[slideNumber2].classList.add("active2");
  slideIcons2[slideNumber2].classList.add("active2");
});

//image slider autoplay
var playSlider2;

var repeater2 = () => {
  playSlider2 = setInterval(function(){
    slides2.forEach((slide2) => {
      slide2.classList.remove("active2");
    });
    slideIcons2.forEach((slideIcon2) => {
      slideIcon2.classList.remove("active2");
    });

    slideNumber2++;

    if(slideNumber2 > (numberOfSlides2 - 1)){
      slideNumber2 = 0;
    }

    slides2[slideNumber2].classList.add("active2");
    slideIcons2[slideNumber2].classList.add("active2");
  }, 4000);
}
repeater2();

//stop the image slider autoplay on mouseover
slider2.addEventListener("mouseover", () => {
  clearInterval(playSlider2);
});

//start the image slider autoplay again on mouseout
slider2.addEventListener("mouseout", () => {
  repeater2();
});

//////////////////////////////
///////////////////

const slider3 = document.querySelector(".slider3");
const nextBtn3 = document.querySelector(".next-btn3");
const prevBtn3 = document.querySelector(".prev-btn3");
const slides3 = document.querySelectorAll(".slide3");
const slideIcons3 = document.querySelectorAll(".slide-icon3");
const numberOfSlides3 = slides3.length;
var slideNumber3 = 0;

//image slider next button
nextBtn3.addEventListener("click", () => {
  slides3.forEach((slide3) => {
    slide3.classList.remove("active3");
  });
  slideIcons3.forEach((slideIcon3) => {
    slideIcon3.classList.remove("active3");
  });

  slideNumber3++;

  if(slideNumber3 > (numberOfSlides3 - 1)){
    slideNumber3 = 0;
  }

  slides3[slideNumber3].classList.add("active3");
  slideIcons3[slideNumber3].classList.add("active3");
});

//image slider previous button
prevBtn3.addEventListener("click", () => {
  slides3.forEach((slide3) => {
    slide.classList.remove("active");
  });
  slideIcons3.forEach((slideIcon3) => {
    slideIcon3.classList.remove("active3");
  });

  slideNumber3--;

  if(slideNumber3 < 0){
    slideNumber3 = numberOfSlides3 - 1;
  }

  slides3[slideNumber3].classList.add("active3");
  slideIcons3[slideNumber3].classList.add("active3");
});

//image slider autoplay
var playSlider3;

var repeater3 = () => {
  playSlider3 = setInterval(function(){
    slides3.forEach((slide3) => {
      slide3.classList.remove("active3");
    });
    slideIcons3.forEach((slideIcon3) => {
      slideIcon3.classList.remove("active3");
    });

    slideNumber3++;

    if(slideNumber3 > (numberOfSlides3 - 1)){
      slideNumber3 = 0;
    }

    slides3[slideNumber3].classList.add("active3");
    slideIcons3[slideNumber3].classList.add("active3");
  }, 4000);
}
repeater3();

//stop the image slider autoplay on mouseover
slider3.addEventListener("mouseover", () => {
  clearInterval(playSlider3);
});

//start the image slider autoplay again on mouseout
slider3.addEventListener("mouseout", () => {
  repeater3();
});

//////////////////////////////
///////////////////

const slider4 = document.querySelector(".slider4");
const nextBtn4 = document.querySelector(".next-btn4");
const prevBtn4 = document.querySelector(".prev-btn4");
const slides4 = document.querySelectorAll(".slide4");
const slideIcons4 = document.querySelectorAll(".slide-icon4");
const numberOfSlides4 = slides4.length;
var slideNumber4 = 0;

//image slider next button
nextBtn4.addEventListener("click", () => {
  slides4.forEach((slide4) => {
    slide4.classList.remove("active4");
  });
  slideIcons4.forEach((slideIcon4) => {
    slideIcon4.classList.remove("active4");
  });

  slideNumber4++;

  if(slideNumber4 > (numberOfSlides4 - 1)){
    slideNumber4 = 0;
  }

  slides4[slideNumber4].classList.add("active4");
  slideIcons4[slideNumber4].classList.add("active4");
});

//image slider previous button
prevBtn4.addEventListener("click", () => {
  slides4.forEach((slide4) => {
    slide.classList.remove("active");
  });
  slideIcons4.forEach((slideIcon4) => {
    slideIcon4.classList.remove("active4");
  });

  slideNumber4--;

  if(slideNumber4 < 0){
    slideNumber4 = numberOfSlides4 - 1;
  }

  slides4[slideNumber4].classList.add("active4");
  slideIcons4[slideNumber4].classList.add("active4");
});

//image slider autoplay
var playSlider4;

var repeater4 = () => {
  playSlider4 = setInterval(function(){
    slides4.forEach((slide4) => {
      slide4.classList.remove("active4");
    });
    slideIcons4.forEach((slideIcon4) => {
      slideIcon4.classList.remove("active4");
    });

    slideNumber4++;

    if(slideNumber4 > (numberOfSlides4 - 1)){
      slideNumber4 = 0;
    }

    slides4[slideNumber4].classList.add("active4");
    slideIcons4[slideNumber4].classList.add("active4");
  }, 4000);
}
repeater4();

//stop the image slider autoplay on mouseover
slider4.addEventListener("mouseover", () => {
  clearInterval(playSlider4);
});

//start the image slider autoplay again on mouseout
slider4.addEventListener("mouseout", () => {
  repeater4();
});