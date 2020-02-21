$('body').on('click','.review_detail',function() {
	$('.gift').show();
});
$('body').on('click', 'button', function() {
	$(this).parents('.gift').hide();
})
