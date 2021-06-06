$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '300px',
      opacity: '0.3',
      height: '200px',
      width: '200px'
    });
  });
});