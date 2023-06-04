
let moon = document.querySelector('#moon');
let stars = document.querySelector('#stars');
let front = document.querySelector('#mountains_front');
let back = document.querySelector('#mountains_behind');
let btn = document.querySelector('#btn');
let txt = document.querySelector('#text');
let header = document.querySelector('header');

window.addEventListener('scroll' , ()=>{
    let value = window.scrollY;
 
    stars.style.left = value + 'px';
    moon.style.top = value * 1.05 + 'px';
    back.style.top = value * 0.5 + 'px';
    front.style.top = value * 0+ 'px';
    txt.style.marginRight = value * 4 + 'px';
    txt.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


  let conut_number = document.querySelectorAll('.count-number');



let item1 = 0 ;
let item2 = 0;
let item3 = 0;
let item4 = 0;

    setInterval(()=>{
        if(item1 < 700 ){
            item1 += 10;
            conut_number[1].innerHTML = item1 + ' K' ;
        }
    },50);
    setInterval(()=>{
        if(item2 < 500 ){
            item2 += 10;
            conut_number[2].innerHTML = item2 + ' M' ;
        }
    },50);
    setInterval(()=>{
        if(item3 < 6 ){
            item3 += 1;
            conut_number[3].innerHTML = item3 + ' Years' ;
        }
    },500);
    setInterval(()=>{
        if(item4 < 900 ){
            item4 += 5;
            conut_number[0].innerHTML = item4 + ' M' ;
        }
    },35);


// invoke the carousel
$('#carouselExampleIndicators').carousel({
    interval: false
  });
  
  $('#carouselExampleIndicators').bind('mousewheel', function(e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        $(this).carousel('prev');
    } else {

      $(this).carousel('next');
    }
  });
  $('#carouselExampleIndicators').bind('touchmove', function(e) {
    console.log(e);
  });


  
  /* SLIDE ON CLICK */
  
  $('.carousel-linked-nav > li > a').click(function() {
  
    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(0));
  
    // slide to number -1 (account for zero indexing)
    $('#carouselExampleIndicators').carousel(item + 1);
  
    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');
  
    // add active class to just clicked on item
    $(this).parent().addClass('active');
  
    // don't follow the link
    return false;
  });
  
  /* AUTOPLAY NAV HIGHLIGHT */
  
  // bind 'slid' function
  $('#carouselExampleIndicators').bind('slid', function() {
  
    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');
  
    // get index of currently active item
    var idx = $('#carouselExampleIndicators .item.active').index();
  
    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
  
  });
  $('.tdnn').click(function () {
    $("body").toggleClass('light');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
  });


// or




console.log(tsParticles);

