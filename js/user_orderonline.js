//nav_list 
$('.nav_link').on('click','li',function(){
	$('p').removeClass('now');
	var flag=$(this).find('p').hasClass('now');
	if(!flag){
		$(this).find('p').addClass('now')
		
	}else{
		$(this).find('p').removeClass('now')
	}
});

$('table').on('click','.time',function(){
	var flag=$(this).find('.order_triangle').hasClass('transform');
	console.log(flag)
	if(!flag){
		$(this).find('.order_triangle').addClass('transform');
		$(this).find('.time_list').show();
	}else{
		$(this).find('.order_triangle').removeClass('transform');
		$(this).find('.time_list').hide();
	}
});
$('table').on('click','.state',function(){
	var flag=$(this).find('.order_triangle').hasClass('transform');
	if(!flag){
		$(this).find('.order_triangle').addClass('transform');
		$(this).find('.state_list').show();
	}else{
		$(this).find('.order_triangle').removeClass('transform');
		$(this).find('.state_list').hide();
	}
});
$('.operation').on('click','.dele_button',function () {
	$(this).parents('.buy_goods').remove();
	if($('.buy_goods').length==0){
		$('.null_tips').show();
	}else{
		$('.null_tips').hide();
	}
	
})