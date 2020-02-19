$('.user_img').on('click','.recom_title',function () {
	$(this).addClass('white');
	$(this).siblings('.upload_title').removeClass('white');
	$(this).siblings('.upload_title').addClass('black');
	$(this).parents('.title').siblings('.recommend').show();
	$(this).parents('.title').siblings('.upload').hide();
})
$('.user_img').on('click','.upload_title',function () {
	$(this).addClass('white');
	$(this).siblings('.recom_title').removeClass('white');
	$(this).siblings('recom_title').addClass('black');
	$(this).parents('.title').siblings('.recommend').hide();
	$(this).parents('.title').siblings('.upload').show();
})
$('#btn').click(function () {
	// 为判断
	alert('保存成功');
})
