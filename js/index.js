

//第一页loading

//count();

function count(){
	
	var num = 0;
	
	$('.page1 .loadText span').html(num+'%');
	
	var timer = setInterval(function(){
	
		var random = Math.floor(Math.random()*20);
		
		num+=random;
		
		if(num > 99){
			
			clearInterval(timer);
			
			num = 99;
			
			$('.page2').show().siblings().hide();
			
			$('.page2').animate({'top':'-200%'},3000);
		}
		
		
		
		$('.page1 .loadText span').html(num+'%');
		

		
//		console.log(random);
		
	},500)
}


//海报生成中

function count2(){
	
	var num = 0;
	
	$('.page5 .loadText span').html(num+'%');
	
	var timer = setInterval(function(){
	
		var random = Math.floor(Math.random()*20);
		
		num+=random;
		
		if(num > 99){
			
			clearInterval(timer);
			
			num = 99;
			
			$('.page6').show().siblings().hide();
			

		}
		
		
		
		$('.page5 .loadText span').html(num+'%');
		

		
//		console.log(random);
		
	},500)
}

//生成海报
	$('.footerBtnRight').click(function(){
	
//		for(var i = 0;i < $('.text').length;i++){
//			
//			$('.spanText'+i).html($('.text'+i).val()) ;
//			
//		}
//		
//			$('.page33').show().siblings().hide();

		$('.page5').show().siblings().hide();
		
			count2();
		
		})
//话唠模式切换

$('.sayBtm img').click(function(){
	
	$('.page3').show().siblings().hide();
	
})

//重做一次

$('.footerBtnLeft').click(function(){
	
	$('.page3 input').val('');
	
	console.log(123);
})

//重新选择照片

$('.backBtm img').click(function(){
	
	$('.page3').show().siblings().hide();
	
	console.log(123);
})
//第三页
var height = $(window).height();

$('.page3').height(height);

$('.page3 .page3Container').height(height)

//console.log(height);








