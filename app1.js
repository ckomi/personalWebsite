console.clear();
var homePage = document.querySelector("#homePage");
var homeImg = homePage.querySelector('img');
var homeTextH1 = homePage.querySelector('h1');
var homeTextH2 = homePage.querySelector('h2');

var aboutPage = document.querySelector("#aboutMe");
var aboutTitle = aboutPage.querySelector("h1");

var aboutPortret0 = document.querySelector("#portrait0");
var aboutPortret1 = document.querySelector("#portrait1");
var aboutPortret2 = document.querySelector("#portrait2");
var aboutPortret3 = document.querySelector("#portrait3");
var aboutPortret4 = document.querySelector("#portrait4");
var aboutPortret5 = document.querySelector("#portrait5");

var aboutParagraph1 = document.querySelector('#whoamiBoxP1');
var aboutParagraph2 = document.querySelector('#whoamiBoxP2');

// var ageLine = document.querySelector('#ageLine');
// var ageLine2 = document.querySelector('#ageLine2');
// var ageLine3 = document.querySelector('#ageLine3');

// var eduSchool = document.querySelector('#eduSchool');
// var eduUniversity = document.querySelector('#eduUniversity');

var socialDiv = document.querySelector('#socialDiv');
var sayHi = document.querySelector("#sayHi")

var portfolioPage = document.querySelector("#portfolio");
var vLogo = document.querySelector("#vLogo");
var mLogo = document.querySelector("#mLogo");
var mLogoHidden = document.querySelector("#mLogoHidden");
var portfolioH4 = document.querySelector("#portfolioH4");
var portfolioItems =  document.querySelector("#portfolioItems");


var screen = screen.width;
// ================  Mora da se postavi na ON-LOAD  ====================== 
function calculateBday() {
  var today = new Date();
  var birthDate = new Date("1997/06/17");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  aboutParagraph1.innerHTML = "My name is Miomir Vukovic, I'm "+age+" years old and most of my friends call me Micko for short. I'm web designer and currently staying in Belgrade, Serbia. I'm person who has high passion in design technologies, art and design. One of my dreams is to master all the design technologies and become one of the top designers in the world, and now, I'm working toward it!";
}
console.log('age: ' + calculateBday());


var body = document.body,
    html = document.documentElement;


body.addEventListener('scroll', _.throttle(scrolling, 10));


// $("#mediaicon1").hover(function(){
//   $("#socialHover").css("background-color", "#36b5ff");
//   }, function(){
//     $("#socialHover").css("background-color", "none");
// });










function scrolling(){  

  var scroll = $(body).scrollTop();
  console.log("Scroll "+ scroll);

  // Creating second SCROLL
  if(scroll >= 1300){
    var visinaHome = homePage.offsetHeight;
    var drugiScroll = scroll-visinaHome;
    console.log("Novi scroll " + drugiScroll);
  }// Creating third SCROLL
  if(drugiScroll >= 800){
    var visinaAbout = aboutPage.offsetHeight;
    var treciScroll = drugiScroll-visinaAbout;
    console.log("TRECI scroll " + treciScroll);
  }

  //=============================== HOME SCROLL ===============================

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
    $(homeTextH1).css({visibility: "hidden"})
  } 

  // About me text inside HOME DIV
  if(scroll <= 400){$(homeTextH2).css({opacity: 0})
  }
  if(scroll >= 300){
    $(homeImg).css({opacity: 1-(-(400-scroll)/1000)})
  }
  if(scroll >= 500 && scroll <=1050){
    $(homeTextH2).css({opacity: 0+((scroll-500)/300)})
  }
  else if(scroll >= 1050){
    $(homeTextH2).css({opacity: 1+(-(scroll-1000)/230)})
  }
  if(scroll <= 1200){
    $(homeImg).css({visibility: "visible"})
    $(homeTextH2).css({visibility: "visible"})
  }
  // Stop animations HOME IMG & H2 and remove from clickable elements
  if(scroll >= 1200){
    $(homeImg).css({opacity: 0, visibility: "hidden"})
    $(homeTextH2).css({opacity: 0,visibility: "hidden"})
  }
// ===================================== ABOUT ME NASLOV =====================================
  if(drugiScroll >= -700){
      $(aboutTitle).css({transform: 'translateY('+(36-((drugiScroll+500)/7))+'vh)',transition: 'transform 0.1s'})
    }
    if(drugiScroll <= -450){
      $(aboutTitle).css({opacity: 0})
    }
  if(drugiScroll >= -450){
    $(aboutTitle).css({opacity: 0+((drugiScroll+450)/100)})
  }
  if(drugiScroll >= -250){
    $(aboutTitle).css({transform: 'translateY(0vh)',transition: 'transform 0.1s' ,opacity: 1})
  }

// ===================================== ABOUT ME SLIKA-PORTRET =====================================
  if(drugiScroll >= -250){
    $(aboutPortret1).css({opacity: -1.5+((drugiScroll+250)/90)}),
    $(aboutPortret2).css({opacity: -0.3+((drugiScroll+250)/90)}),
    $(aboutPortret3).css({opacity: -0.6+((drugiScroll+250)/90)}),
    $(aboutPortret4).css({opacity: -1.2+((drugiScroll+250)/90)}),
    $(aboutPortret5).css({opacity: -0.9+((drugiScroll+250)/90)})
  }
  if(drugiScroll >= 0){
    $(aboutPortret1).css({opacity: 1}),
    $(aboutPortret2).css({opacity: 1}),
    $(aboutPortret3).css({opacity: 1}),
    $(aboutPortret4).css({opacity: 1}),
    $(aboutPortret5).css({opacity: 1})
  }
  if(drugiScroll <= -250){
    $(aboutPortret1).css({opacity: -100}),
    $(aboutPortret2).css({opacity: -100}),
    $(aboutPortret3).css({opacity: -100}),
    $(aboutPortret4).css({opacity: -100}),
    $(aboutPortret5).css({opacity: -100})
  }
  // Portret podloga za slike
  if(drugiScroll >= -30){
    $(aboutPortret0).css({visibility: "visible"})
  }else{
    $(aboutPortret0).css({visibility: "hidden"})
  }
// ============== DESKTOP RESPONSIVEE ===============
  if(screen >= 800){
    if(drugiScroll >= -350){
      $(aboutParagraph1).css({transform: 'translateX('+(-150+((drugiScroll+450)/2))+'%)',transition: 'transform 0.1s'}),
      $(aboutParagraph2).css({transform: 'translateX('+(150-((drugiScroll+450)/2))+'%)',transition: 'transform 0.1s'})
    }
    if(drugiScroll <= -350){
      $(aboutParagraph1).css({transform: 'translateX(-150%)',transition: 'transform 0.3s'}),
      $(aboutParagraph2).css({transform: 'translateX(150%)',transition: 'transform 0.3s'})
    }
    if(drugiScroll >= -150){
      $(aboutParagraph1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'}),
      $(aboutParagraph2).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }  
    // ========= EDUCATION DESKTOP ========
    // if(drugiScroll <= 0){
    //   $(ageLine).css({visibility: "hidden"})
    //   $(eduSchool).css({opacity: 0})
    // }
    // if(drugiScroll >= 0 && drugiScroll <= 300){
    //   $(ageLine).css({visibility: "visible",width: "0"+((drugiScroll+1)/3)+"%"})
    // }
    // if(drugiScroll >= 300){
    //   $(ageLine).css({width: "100%"})
    // }
    // if(drugiScroll <= 150){
    //   $(eduSchool).css({opacity: 0, animation: "smoothHide 0.1s ease-in-out"})
    // }
    // if(drugiScroll >= 150){
    //   $(eduSchool).css({opacity: 1, animation: "smoothShow 0.3s ease-in-out"})
    // }
    // if(drugiScroll >= 300){
    //   $(eduUniversity).css({opacity: 1, animation: "smoothShow 0.3s ease-in-out"})
    // }
    // if(drugiScroll <= 300){
    //   $(eduUniversity).css({opacity: 0, animation: "smoothHide 0.1s ease-in-out"})
    // }
  // =============== SOCIAL MEDIA ================
    if(drugiScroll <= 250){
      $(socialDiv).css({opacity: 0})
    }
    if(drugiScroll >= 250){
      $(socialDiv).css({opacity: "0"+((drugiScroll-249)/120)+""})
    }
    if(drugiScroll >= 400){
      $(socialDiv).css({opacity: 1})
    }
    // =============== SAY HI BUTTON ================
    if(drugiScroll <= 350){
      $(sayHi).css({opacity: 0})
    }
    if(drugiScroll >= 350){
      $(sayHi).css({opacity: "0"+((drugiScroll-349)/120)+""})
    }
    if(drugiScroll >= 500){
      $(sayHi).css({opacity: 1})
    }
    //=============================== Portfolio ===============================
    //RESETOVANJE NA HIDDEN
    if(drugiScroll <= 800 || treciScroll <= -380){
      $(vLogo).css({opacity: 0}),
      $(mLogo).css({opacity: 0}),
      $(mLogoHidden).css({opacity: 0})
    }
    if(treciScroll <= -380){
      $(vLogo).css({opacity: 0, visibility:"hidden"}),
      $(mLogo).css({opacity: 0, visibility:"hidden"}),
      $(mLogoHidden).css({opacity: 0, visibility:"hidden"})
    }
    if(treciScroll >= -380 && treciScroll <= -10){
      $(vLogo).css({opacity: "0"+((treciScroll+381)/300)+"", top: "50%", visibility:"visible"}),
      $(mLogo).css({opacity: "0"+((treciScroll+381)/300)+"", top: "50%", visibility:"visible"}),
      $(mLogoHidden).css({opacity: "0"+((treciScroll+381)/300)+"", top: "50%", visibility:"visible"})
    }
    if (treciScroll >= -10 && treciScroll <= 1500) {
      // Portfolio DIV u kome se nalaze elementi iz portfolia 
      $(portfolioPage).css({height: 100+(scroll/10)+"vh"})
    }
    if (treciScroll >= -10) {
      $(vLogo).css({opacity: 1, top: 50-((treciScroll+11)/30)+"%"}),
      $(mLogo).css({opacity: 1, top: 50+((treciScroll+11)/30)+"%"}),
      $(mLogoHidden).css({opacity: 1,top: 50+((treciScroll+11)/30)+"%"})
    }
    if (treciScroll <= 250) {
      $(portfolioH4).css({opacity: 0, visibility:"hidden"})
    }
    if (treciScroll >= 250) {
      $(portfolioH4).css({opacity: "0"+((treciScroll-249)/300)+"", visibility:"visible"})
    }
    if (treciScroll >= 1850) {
      $(vLogo).css({top: "-120%"}),
      $(mLogo).css({top: "120%"}),
      $(mLogoHidden).css({top: "120%"}),
      $(portfolioH4).css({opacity: 1, top: 45-((treciScroll-1849)/30)+"%"})
    }
    if(treciScroll >= 3250){
      $(portfolioH4).css({top: "-1%"}),
      $(portfolioItems).css({visibility: "visible"})
    }
    if(treciScroll <= 3250){
      $(portfolioItems).css({visibility: "hidden"})
    }
  }
// =============== ZA TELEFON RESPONSIVE ================
  if(screen <= 800){
    console.log("RADIIIII");
    if(drugiScroll >= -350){
      $(aboutParagraph1).css({transform: 'translateX('+(-150+((drugiScroll+650)/5))+'%)',transition: 'transform 0.1s'}),
      $(aboutParagraph2).css({transform: 'translateX('+(150-((drugiScroll+650)/5))+'%)',transition: 'transform 0.1s'})
    }
    if(drugiScroll <= -350){
      $(aboutParagraph1).css({transform: 'translateX(-150%)',transition: 'transform 0.1s'}),
      $(aboutParagraph2).css({transform: 'translateX(150%)',transition: 'transform 0.1s'})
    }
    if(drugiScroll >= 100){
      $(aboutParagraph1).css({transform: 'translateX(0%)',transition: 'transform 0.1s'}),
      $(aboutParagraph2).css({transform: 'translateX(0%)',transition: 'transform 0.1s'})
    }
    //======= EDUCATION TELEFON =======
    // if(drugiScroll <= 250){
    //   $(ageLine1).css({visibility: "hidden"})
    //   $(eduSchool).css({opacity: 0})
    // }
    // if(drugiScroll >= 250 && drugiScroll <= 350){
    //   $(ageLine1).css({visibility: "visible",width: "0"+((drugiScroll-249)/2)+"%"}),
    //   $(ageLine2).css({visibility: "hidden"})
    // }
    // if(drugiScroll <= 350){
    //   $(eduSchool).css({opacity: 0,animation: "smoothHide 0.1s ease-in-out"})
    // }
    // if(drugiScroll >= 350 && drugiScroll <= 395){
    //   $(ageLine1).css({width: "50%"}),
    //   $(ageLine2).css({visibility: "visible",height: "0" +((drugiScroll-349)/3)+ "vh",top: ''+(14.9-((drugiScroll-349)/3))+ 'vh'}),
    //   $(ageLine3).css({visibility: "hidden", width: "0%"})
    //   $(eduSchool).css({opacity: 1, animation: "smoothShow 0.4s ease-in-out"})
    // }
    // if(drugiScroll >= 395){
    //   $(ageLine2).css({height: "15vh", top:"0vh"}),
    //   $(ageLine3).css({visibility: "visible",width: "0"+((drugiScroll-394)/2)+"%"})
    // }
    // if(drugiScroll >= 490){
    //   $(eduUniversity).css({opacity: 1, animation: "smoothShow 0.4s ease-in-out"})
    // }
    // if(drugiScroll <= 490){
    //   $(eduUniversity).css({opacity: 0, animation: "smoothHide 0.1s ease-in-out"})
    // }
    // if(drugiScroll >= 495){
    //   $(ageLine1).css({visibility: "visible",width: "50%"}),
    //   $(ageLine2).css({height: "15vh"}),
    //   $(ageLine3).css({visibility: "visible",width: "50%"})
    // }
    // =============== SOCIAL MEDIA TELEFON ================
    if(drugiScroll <= 420){
      $(socialDiv).css({opacity: 0})
    }
    if(drugiScroll >= 420){
      $(socialDiv).css({opacity: "0"+((drugiScroll-419)/150)+""})
    }
    if(drugiScroll >= 570){
      $(socialDiv).css({opacity: 1})
    }
    // =============== SAY HI BUTTON TELEFON ================
    if(drugiScroll <= 550){
      $(sayHi).css({opacity: 0})
    }
    if(drugiScroll >= 550){
      $(sayHi).css({opacity: "0"+((drugiScroll-549)/120)+""})
    }
    if(drugiScroll >= 700){
      $(sayHi).css({opacity: 1})
    }
  }


} //=============================== KRAJ SKROL FUNKCIJE ===============================






// ====================================== BURGERBAR Toggle ANIMACIJE ======================================

var burgerBar = document.querySelector("#burgerBar");
var menuBar = document.querySelector("#menuPage");

var stNavA = document.querySelector("#stNavA");
var ndNavA = document.querySelector("#ndNavA");
var rdNavA = document.querySelector("#rdNavA");
var thNavA = document.querySelector("#thNavA");
var menuLinks = document.querySelector(".menuLinks");



var seeMorePage = document.querySelector("#seeMorePage");
var closeMore = document.querySelector("#closeMore");

$(".btnPortMore").on("click", function(){
  $( seeMorePage ).css({visibility: "visible",opacity: 1,transition: "visibility 0.5s, opacity 0.2s linear"})
  // $( stNavA ).css({animation: "navEaseIn 0.4s ease-in-out"})
  // $( ndNavA ).css({animation: "navEaseIn 0.5s ease-in-out"})
  // $( rdNavA ).css({animation: "navEaseIn 0.6s ease-in-out"})
  // $( thNavA ).css({animation: "navEaseIn 0.7s ease-in-out"})
  $( body ).css({overflowY: "hidden"})
});
$(closeMore).on("click", function(){
  $( seeMorePage ).css({visibility: "hidden",opacity: 0,transition: "visibility 0.5s, opacity 0.2s linear"})
  $( body ).css({overflowY: "scroll"})
});

// $("#stNavA, #ndNavA, #rdNavA, #thNavA").on("click", function(){
//   $("#stNavA").addClass(".activeLink");
//   count=0;
//   var x=setInterval(function(){
//     // menuLinks.classList.toggle("activeLink");
//     count++;
//     if(count >= 1) clearInterval(x);
//     }, 1000);
// })

// $(body).on('click', 'a[href^="#"]', function(e) {
  // target element id
  // var id = $(this).attr('href');
  // target element
  // var $id = $(id);
  // prevent standard hash navigation (avoid blinking in IE)
  // e.preventDefault();
  // var pos = ($id.offset().top)*2;
  // animated top scrolling
//   $('body, html').animate({ scrollTop: pos });
//   console.log("Skrolovani ID: " + pos);
// });

// $("#stNavA").click(function() {
//   $('html, body').animate({
//       scrollBottom: $("#aboutMe").offset().bottom
//   }, 2000);
// });








  // if(aboutTitleTranslate >= "0" && scroll >= 2200){
  //   $(aboutTitle).css({
  //     transform: 'translateX(0%)' ,
  //     transition: 'transform 0.1s'
  //   })
  // }
  // console.log(element);
  // const element = document.querySelector("#aboutTitle");
  // const transformValue = window.getComputedStyle(element).transform;
  // const w = window.getComputedStyle(element).width;
  // var matrix = new WebKitCSSMatrix(transformValue);
  // var matrix1 = matrix.m41/parseInt(w)*100+"%";

  // var titleSkrol = $(aboutTitle).css('transform').replace(/[^0-9\-.,]/g, '');
  // if ($(body).scrollTop() > $('#aboutMe').height() / 2) {
  //   $(aboutTitle).css({
  //     opacity: 0+((scroll-1280)/300),
  //     transform: 'translateX('+(-100+(scroll-1250)/10)+'%)' ,
  //     transition: 'transform 0.1s'
  //   })
  // } 





// Funkcija za dobijanje trenutne vrednosti TranslateX input elementa
// function getTranslateX(inputElement){
//   elementTranslate = inputElement,
//   transformValue = window.getComputedStyle(elementTranslate).transform,
//   w = window.getComputedStyle(elementTranslate).width,
//   matrix = new WebKitCSSMatrix(transformValue),
//   matrix1 = matrix.m41/parseInt(w)*100+"%"
//   return matrix1;
// }


//   console.log(scroll);
// }

// $(aboutPage).scroll(function() {
//   var scroarer = $(aboutPage).scrollTop();
//   console.log("RADIIIIII" + scroarer);
// })


// var aboutTitleTranslate = getTranslateX(aboutTitle)
  // console.log("About title translatex trenutni "+aboutTitleTranslate);

  // var aboutTitleTranslate1 = parseInt(aboutTitleTranslate)
  // console.log("INTIDZER JE " + aboutTitleTranslate1);

  // var bodyVisina = body.offsetHeight;
  // var visinaAbaut = homePage.offsetHeight;
  
  // console.log("Visina HOME "+ visinaAbaut);
  // console.log("Visina Body " + bodyVisina);

  var portSingleDiv = document.getElementsByClassName("portSingleDiv");
var prevDiv;

for (var i = 0; i < portSingleDiv.length; i++) {
  portSingleDiv[i].onclick = function() {
        var classes = this.classList;

        if (classes.contains("show")) {

            classes.remove("show");
        } else {
            if (prevDiv != null)

            prevDiv.classList.remove("show");
            prevDiv = this;
            classes.add("show");
        }
    }
}

function stopPropagation(event) {
    event.stopPropagation();
};