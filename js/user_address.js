 $('.added').click(function () {
	 $('.addedForm_get').show();
});
$('body').on('click','.close_btn',function () {
	$('.close_btn').parents('.addedForm_get').hide();
});
$('body').on('click','.close_X',function () {
	$('.close_btn').parents('.addedForm_get').hide();
})
$('body').on('click','.submit_btn',function () {
	console.log(1)
})