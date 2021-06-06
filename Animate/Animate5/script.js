$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");
    div.animate({height: '500px', opacity: '0.2'}, "slow");
    div.animate({width: '500px', opacity: '0.6'}, "slow");
    div.animate({height: '100px', opacity: '0.2'}, "slow");
    div.animate({width: '100px', opacity: '1.0'}, "slow");
  });
});