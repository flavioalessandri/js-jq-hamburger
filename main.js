$('div.header-right>a').click(function(){
  $('div.hamburger-menu').addClass('active');
});

$('div.hamburger-menu>a').click(function(){
  $('div.hamburger-menu').removeClass('active');
});
