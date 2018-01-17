$(document).ready(function(){

//Home button scroll



//About button scroll
  $("#aboutBtn").click(function (){
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1200);
  });

//Portfolio button scroll
  $("#portfolioBtn").click(function (){
      $('html, body').animate({
          scrollTop: $("#portfolio").offset().top
      }, 1200);
  });

//Contact button scroll
  $("#contactBtn").click(function (){
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 1200);
  });



  });
