$(document).ready(function() {
	
	//hide 000webhost div
	$("div").last().css('display', 'none')
	
    var num = 0;
	$('.arrow').each(function() {
		var xPos = $(this).offset().top;
		xPos -= 60;
		$(this).offset({'top':xPos});
	});
	
	$('.email').click(function(){
		alert("Email: hello@karson.tk");
	});
    
	$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Up Arrow Pressed
			case 38:
				if (num != 0){
					$('.arrow').animate({top: "-=45"}, 'fast');
                    num--;
                }
                break;
			// Down Arrow Pressed
			case 40:
				if (num != 3){
                    $('.arrow').animate({top: "+=45px"}, 'fast');
                    num++;
                }
                break;
			case 13:
				if (num == 0){
					window.open('https://www.facebook.com/karson0067', '_blank');
				}else if (num == 1){
					window.open('https://twitter.com/ooneoneo', '_blank');
				}else if (num == 2){
					window.open('http://instagram.com/ooneoneo', '_blank');
				}else if (num == 3){
					alert("Email: hello@karson.tk");
				}
				break;
		}
    });
});