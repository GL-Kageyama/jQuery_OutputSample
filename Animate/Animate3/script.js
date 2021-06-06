$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '+=50px',
      height: '+=30px',
      width: '+=30px'
    });
  });
});