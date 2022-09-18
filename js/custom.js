$(function () {
  //  set dark mode 
  $(".moon").on("click",function(){
    $(this).toggleClass("active-moon");
    $("body").toggleClass("darkMode");
  }); 
  // set search settings [focus] 
      // if($("body").width()<=767){
      //   $("input").on("focus",function()
      //   {
      //     $(".search-wrapper").animate({
      //       "width" :"87vw",
      //     }
      //   ,500);
      //   });
      //   $("input").on("focusout",function()
      //   {
      //     $(".search-wrapper").animate({
      //       "width" :"180px",
      //     }
      //   ,500);
      //   });
      //  }
  // set star in side 
   $("aside .feather-star").on("click",function(){
     $(this).toggleClass("active-star");
   });


  // set list view in projects 
  $(".fa-list").parent().on("click",function(){
     $(".projects .boxes").addClass("list-view");
     $(this).addClass("active").siblings().removeClass("active");
        });
  $(".fa-th-large").parent().on("click",function(){
    $(".projects .boxes").removeClass("list-view");
    $(this).addClass("active").siblings().removeClass("active");
 });
//  set aside for mobile 
    if($("body").width()<=991){
    }
    $(".aside-open").on("click",function(){
      $("aside").attr("class", "");
      $("aside").addClass("aside-mobile").fadeIn();
      $(this).fadeOut();
      $(".aside-close").css("display","flex").fadeIn();
      

    }); 
    $(".aside-close").on("click",function(){
      $("aside").fadeOut().removeClass("aside-mobile");
      $(this).fadeOut();
      $(".aside-open").fadeIn();
    }); 
  

    // set nav icons in mobile 
    $(".fa-align-right").on("click",function(){
      $(".icons").fadeToggle(500);
    });
    

     
 
});


// set loading page
$(window).on("load",function(){
   $(".loading").delay(2000).fadeOut(0,function(){
    $(this).remove();
    // animation when doc is ready 
    $(".projects").addClass("animate__animated animate__fadeInTopLeft");
    $(".projects .boxes .box").addClass("animate__animated animate__zoomInLeft");
    $("aside .box").addClass("animate__animated animate__bounceInDown");
    $(".projects .btns button").addClass("animate__animated animate__bounceIn");
    $(".projects .item-status").addClass("animate__animated animate__lightSpeedInLeft");
    $(".list").addClass("animate__animated animate__bounceInDown");
    $("aside").addClass("animate__animated animate__fadeInTopRight");
    $("header .right-side").addClass("animate__animated animate__bounceInDown");
    $("header .left-side").addClass("animate__animated animate__bounceInDown");
  
   });
});