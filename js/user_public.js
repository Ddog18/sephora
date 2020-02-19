$('body').on('click','.link',function(){
	var flag=$(this).find('.triangle').hasClass('transform')
	
	if(!flag){
		$(this).find('.triangle').addClass('transform')
		$(this).next('.subList').find('li').show();
	}else{
		$(this).find('.triangle').removeClass('transform')
		$(this).next('.subList').find('li').hide();
	}
})