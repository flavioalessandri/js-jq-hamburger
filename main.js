console.log("01 script to show the hamburger menu using addClass");

// $('div.header-right>a').click(function(){
//   $('div.hamburger-menu').addClass('active');
//   console.log("Add '.active' from hamburger menu class");
// });
//
// $('div.hamburger-menu>a').click(function(){
//   $('div.hamburger-menu').removeClass('active');
//   console.log("Remove '.active' from hamburger menu class");
// });

console.log("02 script to show the hamburger menu using Show/hide");

// $('div.header-right>a').click(function(){
//   $('div.hamburger-menu').show("slow");
//   console.log("Use 'show' to make hanmburger.menu content visible");
// });
//
// $('div.hamburger-menu>a').click(function(){
//   $('div.hamburger-menu').hide("slow");
//   console.log("Use 'hide' to make hanmburger.menu content hidden");
// });


console.log("03 Compact script to show the hamburger menu using addClass");
// var hidden = false;
// console.log(hidden);
//
// $('div.header-right>a,div.hamburger-menu>a').click(function(){
//   if(hidden == false ){
//     $('div.hamburger-menu').addClass('active');
//     hidden = true;
//     console.log(hidden);
//   } else {
//       $('div.hamburger-menu').removeClass('active');
//       hidden = false;
//       console.log(hidden);
//     }
//   }
// );

 console.log("04 Compact script using Fade");
var closeButton = $(".close");
var button = $("div.header-right> a");
var hamburgerMenu =$('div.hamburger-menu');

button.click( function(){
hamburgerMenu.fadeIn(3000);
});

closeButton.click( function(){
hamburgerMenu.fadeOut(3000);
});




// $('div.hamburger-menu > a').mouseenter(function(){
//   $(this).css('color', 'red');
// });
//
// $('div.hamburger-menu > a').mouseleave(function(){
//   $(this).css('color', 'white');
// });
