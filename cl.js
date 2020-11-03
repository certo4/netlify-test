$(function() { 
  
//   COVER LETTER TRANSITION
  $(document).on('click', '.text', function () {   
    $(".blue-background").fadeOut(1000);
    
    $(".orange-background").css("animation-name", "zero-opacity");
    $(".orange-background").css("animation-duration", "1s");
    $(".orange-background").css("animation-fill-mode", "forwards");
    
    $("h1").css("animation-name", "h1-text");
    $("h1").css("animation-duration", "1s");
    $("h1").css("animation-fill-mode", "forwards");
    
    $(".link").css("animation-name", "link-text");
    $(".link").css("animation-duration", "1s");
    $(".link").css("animation-fill-mode", "forwards");
    
    $(".hubspot").css("animation-name", "hubspot-text");
    $(".hubspot").css("animation-duration", "1s");
    $(".hubspot").css("animation-fill-mode", "forwards");
    
    $(".cover-letter").delay(500).fadeIn(500);
    $(".video-container").fadeOut(500);
    
    $('html, body').delay(1050).stop().animate({
      scrollTop: $("#cover-letter").offset().top
    }, 1000);
  });
  
  //   VIDEO TRANSITION
  $(document).on('click', '.video', function () {   
    $(".blue-background").fadeIn(1000);
    
    $(".orange-background").css("animation-name", "zero-opacity");
    $(".orange-background").css("animation-duration", "1s");
    $(".orange-background").css("animation-fill-mode", "forwards");
    
    $("h1").css("animation-name", "h1-text");
    $("h1").css("animation-duration", "1s");
    $("h1").css("animation-fill-mode", "forwards");
    
    $(".link").css("animation-name", "link-hubspot-video");
    $(".link").css("animation-duration", "1s");
    $(".link").css("animation-fill-mode", "forwards");
    
    $(".hubspot").css("animation-name", "link-hubspot-video");
    $(".hubspot").css("animation-duration", "1s");
    $(".hubspot").css("animation-fill-mode", "forwards");
    
    $(".video-container").delay(500).fadeIn(500).css("display", "flex");
    $(".cover-letter").fadeOut(500);
    
    $('html, body').delay(1050).stop().animate({
      scrollTop: $("#video").offset().top
    }, 1000);
  });  
});
