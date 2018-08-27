$(document).ready(function(){
    $(".nav__item").mouseover(function(){
        var angle = 0;
		  setInterval(function(){
		    angle+=3;
		  $("img").rotate(angle);
		  },30);
    });
    $(".nav__item").mouseout(function(){
        var angle = 0;
    });
});