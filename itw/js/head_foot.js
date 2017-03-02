
window.onload = function(){
	var a = $(document).width();
		

			var flag =true ;
			$(".btn1").click(function(){
				if(!$('.app').is(':animated')){
					if(flag){
						$(".app").slideDown(300);
						
						flag = false ;
		
					}else{
						$(".app").slideUp(300);
						
						flag = true;
					}
				}	
			})
		
	window.onresize = function () {
		a = $(document).width();
		console.log(a)
		if(a>750){
			$('.app').css('display','none');
		}
	}
}

