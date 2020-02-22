//nav_list 
$('.nav_link').on('click', 'li', function() {
	$('p').removeClass('now');
	var flag = $(this).find('p').hasClass('now');
	if (!flag) {
		$(this).find('p').addClass('now')

	} else {
		$(this).find('p').removeClass('now')
	}
});

$('table').on('click', '.time', function() {
	var flag = $(this).find('.order_triangle').hasClass('transform');
	console.log(flag)
	if (!flag) {
		$(this).find('.order_triangle').addClass('transform');
		$(this).find('.time_list').show();
	} else {
		$(this).find('.order_triangle').removeClass('transform');
		$(this).find('.time_list').hide();
	}
});
$('table').on('click', '.state', function() {
	var flag = $(this).find('.order_triangle').hasClass('transform');
	if (!flag) {
		$(this).find('.order_triangle').addClass('transform');
		$(this).find('.state_list').show();
	} else {
		$(this).find('.order_triangle').removeClass('transform');
		$(this).find('.state_list').hide();
	}
});
$('.operation').on('click', '.dele_button', function() {
	$(this).parents('.buy_goods').remove();
	if ($('.buy_goods').length == 0) {
		$('.null_tips').show();
	} else {
		$('.null_tips').hide();
	}

})
//筛选
$('#finish_btn').click(function() {
	finish();
	$('.state_list').siblings('.first').children('a').text('已完成');
})
$('#all_btn').click(function() {
	all();
	$('.state_list').siblings('.first').children('a').text('全部状态');
})
$('#handle_btn').click(function() {
	handle();
	$('.state_list').siblings('.first').children('a').text('处理中');
})
$('#delivery_btn').click(function() {
	delivery();
	$('.state_list').siblings('.first').children('a').text('配送中');
})
$('#wait_btn').click(function() {
	wait();
	$('.state_list').siblings('.first').children('a').text('待支付');
	
})

//下拉菜单筛选
 $('.state_list').on('click','.link',function () {
	 var $stateTitle=$(this).parent('.state_list').siblings('.first').children('a');
 	$(this).each(function () {
		$stateTitle.text($(this).children('a').text());
		if($stateTitle.text()=="待支付"){
			$('.nav_link').find('p').removeClass('now');
			$('#wait_btn').addClass('now');
			wait();
		}
		if($stateTitle.text()=="配送中"){
			$('.nav_link').find('p').removeClass('now');
			$('#delivery_btn').addClass('now');
			delivery();
		}
		if($stateTitle.text()=="处理中"){
			$('.nav_link').find('p').removeClass('now');
			$('#handle_btn').addClass('now');
			handle();
		}
		if($stateTitle.text()=="已完成"){
			$('.nav_link').find('p').removeClass('now');
			$('#finish_btn').addClass('now');
			finish();
		}
		if($stateTitle.text()=="全部状态"){
			$('.nav_link').find('p').removeClass('now');
			$('#all_btn').addClass('now');
			all();
		}
 	})
 })
function wait() {
	$('.tips').children('.buy_goods').show();
	$(this).parents('.nav_link').siblings('.table ').find('.state').children('.first').children('a').text('待支付');
	$('#top_item').text('待支付');
	$('.tips').children('.buy_goods').not('#wait').hide();
}
function delivery() {
	$('.tips').children('.buy_goods').show();
	$(this).parents('.nav_link').siblings('.table ').find('.state').children('.first').children('a').text('配送中');
	$('#top_item').text('配送中');
	$('.tips').children('.buy_goods').not('#delivery').hide();
}
function handle() {
	$('.tips').children('.buy_goods').show();
	$(this).parents('.nav_link').siblings('.table ').find('.state').children('.first').children('a').text('处理中');
	$('#top_item').text('处理中');
	$('.tips').children('.buy_goods').not('#handle').hide();
}
function finish() {
	$('.tips').children('.buy_goods').show();
	$(this).parents('.nav_link').siblings('.table ').find('.state').children('.first').children('a').text('已完成');
	$('#top_item').text('已完成');
	$('.tips').children('.buy_goods').not('#finish').hide();
}
function all() {
	$(this).parents('.nav_link').siblings('.table ').find('.state').children('.first').children('a').text('全部状态');
	$('#top_item').text('全部状态');
	$('.tips').children('.buy_goods').show();
}