$(document).ready(function(){

  $('.but-kind-hid').click(function() {
    $(this).next('.kind-hidden').slideToggle(500)
  });

  $('.nav-block-mobile').click(function(event) {
    $('.nav-block-mobile,.mobile-block-menu').toggleClass('active');
  });

  $('.top-archor').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#archor-up').offset().top }, 1000);
    e.preventDefault();
  });

});

