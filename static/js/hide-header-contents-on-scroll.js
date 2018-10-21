$(window).scroll(function() {

    if ($(this).scrollTop()>50)
     {
        $('.content-center').fadeOut();
     }
    else
     {
      $('.content-center').fadeIn();
     }
 });
