console.clear();
// HOME
var homePage = document.querySelector("#homePage");
var homeImg = homePage.querySelector('img');
var homeTextH1 = homePage.querySelector('h1');
var homeTextH2 = homePage.querySelector('h2');
// ABOUT
var aboutPage = document.querySelector("#aboutMe");
var aboutPhoto = aboutPage.querySelector("img");
var aboutParagraph1 = document.querySelector('#whoamiBoxP1');
var aboutH1 = document.querySelector('#whoamiBoxH');
var sayHi = document.querySelector("#sayHi")
// PORTFOLIO
var portfolioPage = document.querySelector("#portfolio");
var vLogo = document.querySelector("#vLogo");
var mLogo = document.querySelector("#mLogo");
var mLogoHidden = document.querySelector("#mLogoHidden");
var portfolioH4 = document.querySelector("#portfolioH4");
var portfolioItems =  document.querySelector("#portfolioItems");
// CONTACT
var contactSection =  document.querySelector("#contactSection");
var contactImg = contactSection.querySelector("img");
var contactH = contactSection.querySelector("h1");
var contactMedia =  document.querySelector("#contactMedia");
var contactForm =  document.querySelector("#contactForm");
// PARAMETERS FOR SCROLL
var screen = screen.width;
var body = document.body,
    html = document.documentElement;
// LOADING SCREEN
var loader =  document.querySelector(".loading-page");
//=========================================================================================================================
//============================================================== SCROLL RESPONSIVE ========================================
//=========================================================================================================================

body.addEventListener('scroll', _.throttle(scrolling, 10));

function scrolling(){  

  var scroll = $(body).scrollTop();
  // Creating second SCROLL
  if(scroll >= 1300){
    var visinaHome = homePage.offsetHeight;
    var drugiScroll = scroll-visinaHome;
  }// Creating third SCROLL
  if(drugiScroll >= 800){
    var visinaAbout = aboutPage.offsetHeight;
    var treciScroll = drugiScroll-visinaAbout;
  }
  //--------------------------- HOME SECTION ---------------------------
  if(scroll <= 0){
    $(homeImg).css({transform: 'translate3d(0%, 0%)',transition: 'transform 0.1s'})
  }
  if(scroll <= 1300){
    // IMG inside HOME DIV
    $(homeImg).css({transform: 'translate3d(0%, -'+(scroll/80)+'%, 0) scale('+(80 + scroll)/80+')',transition: 'transform 0.1s'})
  }
  if (scroll <= 800) {
    // Home DIV with elements
    $(homePage).css({height: 100+(scroll/6)+"vh"}),
    // Hello Friend text inside HOME DIV
    $(homeTextH1).css({opacity: '1'-(scroll/200), visibility: "visible"})
  } 
  // Remove from clickable elements in background "HELLO FRIEND"
  if (scroll >= 800) {
    $(homeTextH1).css({visibility: "hidden"}),
    $(homePage).css({height: "190vh"})
  } 
  if(scroll <= 400){
    $(homeTextH2).css({opacity: 0})
  }
  if(scroll >= 400){
    $(homeImg).css({opacity: 1-(-(400-scroll)/300)})
  }
  if(scroll >= 500 && scroll <=1050){
    $(homeTextH2).css({opacity: 0+((scroll-500)/300)})
  }
  else if(scroll >= 1050){
    $(homeTextH2).css({opacity: 1+(-(scroll-1050)/230)})
  }
  if(scroll <= 700){
    $(homeImg).css({visibility: "visible"})
  }
  if(scroll >= 700){
    $(homeImg).css({opacity: 0,visibility: "hidden"})
  }
  if(scroll <= 1300){
    $(homeTextH2).css({visibility: "visible"})
  }
  // Stop animations HOME IMG & H2 and remove from clickable elements
  if(scroll >= 1300){
    $(homeTextH2).css({opacity: 0,visibility: "hidden"})
  }

//=========================== DESKTOP RESPONSIVE ==========================================================================
//=========================================================================================================================
  if(screen >= 800){
    //--------------------------- ABOUT ME SECTION ---------------------------
    if(scroll >= 950){
      $(aboutPhoto).css({transform: 'translateX('+(150-((scroll-950)/4))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 950){
      $(aboutPhoto).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 1100){
      $(aboutH1).css({transform: 'translateX('+(-150+((scroll-1100)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 1100){
      $(aboutH1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(scroll <= 1300){
      $(aboutParagraph1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 1300){
      $(aboutParagraph1).css({transform: 'translateX('+(-150+((scroll-1300)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1400){
      $(aboutH1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1550){
      $(aboutPhoto).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 1600){
      $(sayHi).css({opacity: 0})
    }
    if(scroll >= 1600){
      $(aboutParagraph1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
      $(sayHi).css({opacity: "0"+((scroll-1599)/120)+""})
    }
    if(scroll >= 1730){
      $(sayHi).css({opacity: 1})
    }
    //--------------------------- PORTFOLIO SECTION ---------------------------
    if(drugiScroll <= 450){
      $( [vLogo, mLogo, mLogoHidden] ).css({opacity: 0, visibility:"hidden"})
    }
    if(drugiScroll >= 450){
      $( [vLogo, mLogo, mLogoHidden] ).css({opacity: "0"+((drugiScroll-450)/300)+"", top: "50%", visibility:"visible"})
    }
    if (drugiScroll >= 800) {
      $(vLogo).css({opacity: 1, top: 50-((drugiScroll-800)/20)+"%"}),
      $( [mLogo, mLogoHidden] ).css({opacity: 1, top: 50+((drugiScroll-800)/20)+"%"})
    }
    if (drugiScroll <= 1050) {
      $(portfolioH4).css({opacity: 0, visibility:"hidden"})
    }
    if (drugiScroll >= 1050) {
      $(portfolioH4).css({opacity: "0"+((drugiScroll-1049)/300)+"", visibility:"visible"})
    }
    if (drugiScroll <= 2100) {
      $(portfolioH4).css({top: "43%"})
    }
    if (drugiScroll >= 2100) {
      $(vLogo).css({top: "-120%"}),
      $( [mLogo, mLogoHidden] ).css({top: "120%"}),
      $(portfolioH4).css({opacity: 1, top: 43-((drugiScroll-2099)/9.5)+"%"})
    }
    //--------------------------- CONTACT SECTION ---------------------------
    if(treciScroll <= 2220){
      $( [contactImg, contactH] ).css({opacity: "0"})
    }
    if(treciScroll >= 2220){
      $( [contactImg, contactH] ).css({opacity: "0"+((treciScroll-2220)/300)})
    }
    if(treciScroll >= 2600){
      $( [contactImg, contactH] ).css({opacity: "1"})
    }
    if(treciScroll <= 2220){
      $(contactMedia).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
      $(contactForm).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(treciScroll >= 2220){
      $(contactMedia).css({transform: 'translateX('+(-150+((treciScroll-2220)/2))+'%)',transition: 'transform 0.1s'})
      $(contactForm).css({transform: 'translateX('+(150-((treciScroll-2220)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(treciScroll >= 2520){
      $( [contactMedia, contactForm] ).css({transform: 'translateX(0%)'})
    }
  }
//========================== LAPTOP RESPONSIVE ============================================================================
//=========================================================================================================================
  if(screen >= 800 & screen <= 1600){
    //--------------------------- ABOUT ME SECTION ---------------------------
    if(scroll >= 750){
      $(aboutPhoto).css({transform: 'translateX('+(150-((scroll-750)/4))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 750){
      $(aboutPhoto).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 950){
      $(aboutH1).css({transform: 'translateX('+(-150+((scroll-950)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 950){
      $(aboutH1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(scroll <= 1100){
      $(aboutParagraph1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 1100){
      $(aboutParagraph1).css({transform: 'translateX('+(-150+((scroll-1100)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1250){
      $(aboutH1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1350){
      $(aboutPhoto).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 1300){
      $(sayHi).css({opacity: 0})
    }
    if(scroll >= 1300){
      $(sayHi).css({opacity: "0"+((scroll-1299)/120)+""})
    }
    if(scroll >= 1400){
      $(aboutParagraph1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1530){
      $(sayHi).css({opacity: 1})
    }
    //------------------------------- PORTFOLIO ---------------------------------
    if (drugiScroll <= 2100) {
      $(portfolioH4).css({top: "40%"})
    }
    if (drugiScroll >= 2100) {
      $(vLogo).css({top: "-120%"}),
      $( [mLogo, mLogoHidden] ).css({top: "120%"}),
      $(portfolioH4).css({opacity: 1, top: 40-((drugiScroll-2099)/9.5)+"%"})
    }
  }

//============================== MOBILE RESPONSIVE ========================================================================
//=========================================================================================================================
  if(screen <= 800){
    //--------------------------- ABOUT ME SECTION ---------------------------
    if(scroll <= 800){
      $(aboutH1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
      $(aboutPhoto).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 800){
      $(aboutH1).css({transform: 'translateX('+(-150+((scroll-800)/2))+'%)',transition: 'transform 0.1s'})
      $(aboutPhoto).css({transform: 'translateX('+(150-((scroll-800)/4))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 900){
      $(aboutParagraph1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(scroll >= 900){
      $(aboutParagraph1).css({transform: 'translateX('+(-150+((scroll-900)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1100){
      $(aboutH1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1200){
      $(aboutParagraph1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll <= 1300){
      $(sayHi).css({opacity: 0})
    }
    if(scroll >= 1300){
      $(sayHi).css({opacity: "0"+((scroll-1299)/120)+""})
    }
    if(scroll >= 1400){
      $(aboutPhoto).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    if(scroll >= 1500){
      $(sayHi).css({opacity: 1})
    }
    //--------------------------- PORTFOLIO SECTION ---------------------------
    if(drugiScroll <= 400){
      $( [vLogo, mLogo, mLogoHidden] ).css({opacity: 0, visibility:"hidden"})
    }
    if(drugiScroll >= 400){
      $( [vLogo, mLogo, mLogoHidden] ).css({opacity: "0"+((drugiScroll-400)/300)+"", top: "50%", visibility:"visible"})
    }
    if (drugiScroll >= 750) {
      $(vLogo).css({opacity: 1, top: 50-((drugiScroll-750)/20)+"%"}),
      $( [mLogo, mLogoHidden] ).css({opacity: 1, top: 50+((drugiScroll-750)/20)+"%"})
    }
    if (drugiScroll <= 950) {
      $(portfolioH4).css({opacity: 0, visibility:"hidden"})
    }
    if (drugiScroll >= 950) {
      $(portfolioH4).css({opacity: "0"+((drugiScroll-949)/300)+"", visibility:"visible"})
    }
    if (drugiScroll <= 2100) {
      $(portfolioH4).css({top: "41%"})
    }
    if (drugiScroll >= 2100) {
      $(vLogo).css({top: "-120%"}),
      $( [mLogo, mLogoHidden] ).css({top: "120%"}),
      $(portfolioH4).css({opacity: 1, top: 41-((drugiScroll-2099)/8)+"%"})
    }
    //--------------------------- CONTACT SECTION ---------------------------
    if(treciScroll <= 1900){
      $( [contactImg, contactH] ).css({opacity: "0"})
    }
    if(treciScroll >= 1900){
      $( [contactImg, contactH] ).css({opacity: "0"+((treciScroll-1900)/300)})
    }
    if(treciScroll >= 2300){
      $( [contactImg, contactH] ).css({opacity: "1"})
    }
    if(treciScroll <= 2000){
      $(contactForm).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'})
    }
    if(treciScroll >= 2000){
      $(contactForm).css({transform: 'translateX('+(-150+((treciScroll-2000)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(treciScroll >= 2300){
      $(contactForm).css({transform: 'translateX(0%)'})
    }
    if(treciScroll <= 2350){
      $(contactMedia).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(treciScroll >= 2350){
      $(contactMedia).css({transform: 'translateX('+(150-((treciScroll-2350)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(treciScroll >= 2650){
      $(contactMedia).css({transform: 'translateX(0%)'})
    } 
  }
}
//=========================================================================================================================
//==============================================================::: SCROLL END :::=========================================
//=========================================================================================================================
//=========================================================================================================================
//=============================::: MENU ONCLICK :::========================================================================
var seeMorePage = document.querySelector("#seeMorePage");
var closeMore = document.querySelector("#closeMore");
var aboutMeOpened = document.querySelector("#aboutMeOpened");
var menuIcon = document.querySelector(".menu");
var closeMoreAbout = document.querySelector("#closeMoreAbout");
// ========================================== OPEN ABOUT ME =====================================================
$(".buttonContact").on("click", function(){
  $( [homePage, aboutPage, portfolioPage,menuIcon,contactSection] ).css({visibility:"hidden", display:"none"})
  $([vLogo, mLogo, mLogoHidden]).css({opacity: 0, visibility:"hidden"})
  $(body).scrollTop(0);
  $( aboutMeOpened ).css({visibility: "visible",display:"block",opacity: 1,transition: "visibility 0.9s, opacity 0.9s linear"})
});
$(closeMoreAbout).on("click", function(){
  $( aboutMeOpened ).css({visibility: "hidden",opacity: 0, display:"none",transition: "visibility 0.5s, opacity 0.2s linear"})
  $( [homePage, aboutPage, portfolioPage, menuIcon, contactSection] ).css({visibility:"visible", display:"block"})
});
// ====================================== OPEN PROJECT PREVEIW ==================================================
$(".portSingleDiv").on("click", function(){
  $( seeMorePage ).css({visibility: "visible",opacity: 1,transition: "visibility 0.5s, opacity 0.2s linear"})
  $( body ).css({overflowY: "hidden"})
});
$(closeMore).on("click", function(){
  $( seeMorePage ).css({visibility: "hidden",opacity: 0,transition: "visibility 0.5s, opacity 0.2s linear"})
  $( body ).css({overflowY: "scroll"})
});

$(document).ready(function(){
  // ====================================== BURGERBAR Toggle ANIMACIJE ======================================
  // HOME SECTION
  $('#homeId').on('click',function (e) {
    $('html, body').stop().animate({
      'scrollTop': $(homePage).offset().top
    }, 2000, 'swing', function () {
      window.location.hash = homePage;
    });
  });
  // ABOUT SECTION
  $('#aboutId').on('click',function (e) {
    $('html, body').stop().animate({
      'scrollTop': $(aboutPage).offset().top + (700)
    }, 2000, 'swing', function () {
      window.location.hash = aboutPage;
    });
  });
  // PORTFOLIO SECTION
  $('#portfolioId').on('click',function (e) {
    $('html, body').stop().animate({
      'scrollTop': $(contactSection).offset().top + (-100)
    }, 2000, 'swing', function () {
      window.location.hash = contactSection;
    });
  });
  // CONTACT SECTION
  $('#contactId').on('click',function (e) {
    $('html, body').stop().animate({
      'scrollTop': $(contactSection).offset().top + (680)
    }, 2000, 'swing', function () {
      window.location.hash = contactSection;
    });
  });
  // ========================================= LOADING SCREEN =============================================
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
    $(".loading-page .counter h1").html(c + "%");
    $(".loading-page .counter hr").css("width", c + "%");
    counter++;
    c++;
    if(counter == 101) {
    clearInterval(i);
    }
  }, 45); 
  setTimeout(function(){
    $(loader).css({opacity: 0,transition: "visibility 0.5s, opacity 0.2s linear"});}, 5000);
  setTimeout(function(){
    $(loader).css({display:"none"});}, 5400);
  // ================================== SKROLNI NA LEVO PORTFOLIO PROJEKTE ===============================
  var portfolioItems = document.querySelector('#portfolioItems')
  var preScrollDiv = $(portfolioItems).width();
  if(screen >= 800){
    $(portfolioItems).scrollLeft((preScrollDiv/100)*13);
  }else{
    $(portfolioItems).scrollLeft(0);
  }
}); 



