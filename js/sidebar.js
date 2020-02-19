$(document).ready(function() {
	$(document).scroll(function() {
		var scrollTop = $(this).scrollTop();
		console.log(scrollTop)
	})
})

//回到顶部

$('body').on('click', '.fixedright_info:last-child', function() {
	$('html,body').animate({
		scrollTop: 0
	})
})
