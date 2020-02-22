//品牌--顶部动画
$('.brand').on('click', '.down', function() {
	var flag = $(this).find('span').text();
	// console.log($(this))
	console.log(flag)
	if (flag == '更多') {
		$(this).find('span').text('收起');
		$(this).find('span').siblings('.down_icon').css({
			'background-position': '0 -11px',
		})
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').css('height', '100%');
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('ul').css({
			'overflow-y': 'auto',
		})
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('.brand_search').show();
	}
	if (flag == '收起') {
		$(this).find('span').text('更多');
		$(this).find('span').siblings('.down_icon').css({
			'background-position': '0 -33px',
		})
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('.brand_search').hide();
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').css('height', '109px');
		$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('ul').css({
			'overflow-y': 'hiden'
		})

	}

})
//+多选
$('.brand').on('click', '.more', function() {
	$('.brand_right_text').hide();
	$(this).parents('.brand_right_text ').siblings('.brand_log_box').css('height', '100%');
	$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('ul').css({
		'overflow-y': 'auto',
	})
	$(this).parents('.brand_right_text ').siblings('.brand_log_box').find('.brand_search').show();

});
$('.brand').on('click', '.cancel', function() {
	$(this).parents('.brand_btn ').siblings('.brand_search ').hide();
	$(this).parents('.brand_log_box ').css('height', '109px');
	$(this).parents('brand_log_box').find('ul').css({
		'overflow-y': 'hiden'
	})
	$('.brand_right_text').show();

})
//按钮选中状态
$('.subsort_left').on('click', '.subsort_item', function() {
	var isWhite = $(this).hasClass('white');
	// console.log(isWhite)
	$('.subsort_item').removeClass('black').addClass('white');
	$('.subsort_item').find('.subsort_line').show();
	$('.subsort_item').find('i').addClass('black_arrow_icon').removeClass('white_arrow_icon');
	$('.price_butn').removeClass('black').addClass('white');
	var isUp = $('.price_butn').find('i').hasClass('white_triangle_up');
	var isDown = $('.price_butn').find('i').hasClass('white_triangle_down');
	// console.log(isUp)
	if (isUp) {
		$('.price_butn').find('i').addClass('black_triangle_icon').removeClass('white_triangle_up');
	}
	if (isDown) {
		$('.price_butn').find('i').addClass('black_triangle_icon').removeClass('white_triangle_down');
	}
	if (isWhite) {
		$(this).removeClass('white').addClass('black');
		$(this).find('i').addClass('white_arrow_icon').removeClass('black_arrow_icon');
		$(this).find('.subsort_line').hide();
	}
});
//价格 排序
$('.price_butn').click(function() {
	//选中 价格
	var isWhite = $(this).hasClass('white');
	console.log(isWhite)
	$('.subsort_item').removeClass('black').addClass('white');
	$('.subsort_item').find('i').addClass('black_arrow_icon').removeClass('white_arrow_icon');
	var $li = $(".goods_box").find("ul").find("li");
	if (isWhite) {
		$(this).removeClass('white').addClass('black');
		$(this).find('i').addClass('white_triangle_up').removeClass('black_triangle_icon');
		$li.sort(function(a, b) {
			var ageA = parseFloat(a.children[5].children[0].innerText);
			var ageB = parseFloat(b.children[5].children[0].innerText);
			return ageB - ageA;
		})
		var arr = [];
		$li.each(function(index) {
			arr.push($li[index]);
		})
		console.log(arr)
		arr.forEach(function(item, index) {
			$('.goods_box').find('ul').append(item);
		})
	} else {
		$(this).find('i').addClass('white_triangle_down').removeClass('white_triangle_up');
		$li.sort(function(a, b) {
			var ageA = parseFloat(a.children[5].children[0].innerText);
			var ageB = parseFloat(b.children[5].children[0].innerText);
			return ageA - ageB;
		});
		var arr_li = [];
		$li.each(function(index) {
			arr_li.push($li[index]);
		})
		console.log(arr_li)
		arr_li.forEach(function(item, index) {
			$('.goods_box').find('ul').append(item);
		})
	}
})

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
		$('.sidebar_get').show();
		$('.subsort_box').css({
			position: 'fixed',
			'box-shadow': '0 0 8px 0 rgba(0,0,0,0.15)',
			width: '100%',
			top: 0,
			padding: '20px 0',
			'transition-duration': '0.8s',
			background: '#fff',
		});
	} else {
		$('.sidebar_get').hide();
		$('.subsort_box').css({
			position: 'relative',
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
