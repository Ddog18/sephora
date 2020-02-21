//品牌--顶部动画

//更多选择
$('.sort_more_item').mouseenter(function() {
	$('.sort_more_item').css({
		color: '#dc002f',
		border: '1px solid #dc002f',
		'border-top': '1px solid white',
	});
	$('.down_icon').css({
		transition: 'background-position 0.15s ease-in-out',
		'background-position': '0 -42px',
	});
	$('.sort_box').css('border-bottom-color', '#dc002f');
});
$('.sort_more_item').mouseleave(function() {
	$('.sort_more_item').css({
		color: '#666',
		border: '1px solid #CCCCCC',
		'border-top': '1px solid white',
	});
	$('.down_icon').css({
		transition: 'background-position 0.15s ease-in-out',
		'background-position': '0 -33px',
	});
	$('.sort_box').css('border-bottom-color', '#CCCCCC');
})
$('.goods_list li').mouseenter(function() {
	$(this).find('.goods_mask').show();
})
$('.goods_list li').mouseleave(function() {
	$(this).find('.goods_mask').hide();
})
//scorllTop监听浏览器窗口
$(window).scroll(function() {
	//获取scrollTop
	var scrollTop = $(this).scrollTop();
	// console.log(scrollTop);
	//导航动画
	if (scrollTop > 720) {
		console.log(1)
		$('.sidebar_get').show();
		$('.subsort_box').css({
			position: 'fixed',
			'box-shadow': '0 0 8px 0 rgba(0,0,0,0.15)',
			width: '100%',
			top:0,
			padding: '20px 0',
			'transition-duration': '0.8s',
			background: '#fff',
		});
	} else {
		$('.sidebar_get').hide();
		$('.subsort_box').css({
			position:'relative',
			padding: 0,
			'box-shadow': '0 0 8px 0 rgba(255,255,255,0.15)',
			'transition-duration': '0s',
		});
	}
});
//回到顶部
$('.sidebar_get').click(function() {
	$('html,body').animate({
		scrollTop: 0
	})
})
