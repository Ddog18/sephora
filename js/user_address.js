var flag;
var thisclass;
//新增--显示表单
$('#add').click(function() {
	flag = true;
	console.log($(this))
	$('form').find('.form_title').children('.title').text('新增地址');
	$('.addedForm_get').show();
});
$('body').on('click', '.close_btn', function() {
	clear();
	$('.close_btn').parents('.addedForm_get').hide();
});
$('body').on('click', '.close_X', function() {
	clear();
	$('.close_btn').parents('.addedForm_get').hide();
})
//保存按钮
$('body').on('click', '.submit_btn', function() {
	var reg=/^[1]([3-9])[0-9]{9}$/;
	// console.log(flag);
	if (flag == true) {
		var username = $('form').find('.link').find('#username').val();
		var $address = $('form').find('.link').find('.zcityGroup').find('.currentValue');
		// console.log($address)
		var addressInfor = "";
		$address.each(function() {
			addressInfor = addressInfor + " " + $(this).val();
		})
		// console.log($address)
		var addressDetailed = $('form').find('.link').find('.address').val();
		var userphone = $('form').find('.link').find('#userphone').val();
		var telephone = $('form').find('.link').find('#telephone').val();
		var mail = $('form').find('.link').find('#postalCode').val();
		//var isCheck=$('form').find('.default').$("input[type='checkbox']").is(':checked');
		var isPhone=reg.test(userphone);
	
		if (username != "" && addressInfor != "" && addressDetailed != ""&&userphone!="") {
			if(isPhone==true){
				var $div = '<div class="address_link clearfix"><div class="infor fl clearfix"><div class="name fl"><span>' +
					username + '</span></div><div class="address_infor fl"><span class="infor">' + addressInfor +
					'</span><span class="address_detailed">' + addressDetailed + '</span></div><div class="phone fl">' + userphone +
					'</div></div><div class="edit fr"><div class="addressIcon close"></div><p class="edit_btn">编辑地址</p></div></div>'
				$('.addressList').append($div);
				clear();
				$('.submit_btn').parents('.addedForm_get').hide();
			}else{
				alert('请输入正确的手机号!');
				
			}
		} else {
			alert('必填项不能为空,请检查');
			return;
		}
	} else {
		var newName = $('form').find('.link').find('#username').val();
		var $newAddress = $('form').find('.link').find('.zcityGroup').find('.currentValue');
		var newAddressInfor = "";
		$newAddress.each(function() {
			newAddressInfor = newAddressInfor + " " + $(this).val();
		})
		
		var newDetailed = $('form').find('.link').find('.address').val();
		var newPhone = $('form').find('.link').find('#userphone').val();
		// console.log(newPhone);
		var isNewphone=reg.test(newPhone);
		if (newName != "" && newAddressInfor != "" && newDetailed != "" && newPhone != "") {
			if(isNewphone==true){
				thisclass.find('.name').text(newName);
				thisclass.find('.phone').text(newPhone);
				thisclass.find('.address_infor').children('.address_detailed').text(newDetailed);
				thisclass.find('.address_infor').children('.infor').text(newAddressInfor);
				clear();
				$('.submit_btn').parents('.addedForm_get').hide();
			}else{
				alert('请输入正确的手机号!');
				
			}
		} else {
			alert('必填项不能为空,请检查');
		}

	}
});
//删除
$('body').on('click', '.close', function() {
	$(this).parents('.address_link').remove()
})
//编辑
$('body').on('click', '.edit_btn', function() {
	console.log(1)
	flag = false;
	thisclass=$(this).parents('.address_link');
	console.log(thisclass)
	$('form').find('.form_title').children('.title').text('修改地址');
	$('.submit_btn').parents('.addedForm_get').show();
	var username = $(this).parents('.edit').siblings('.infor').find('.name').text().trim();
	$('form').find('.link').find('#username').val(username);
	var addressInfor = $(this).parents('.edit').siblings('.infor').find('.address_infor').children('.infor').text().trim();
	//根据空格拆分
	addressInfor = addressInfor.split(' ');
	var $address = $('form').find('.currentValue');
	$address.each(function(index) {
		$(this).val(addressInfor[index]);
	});
	var addressDetailed = $(this).parents('.edit').siblings('.infor').find('.address_infor').find('.address_detailed').text()
		.trim();
	$('form').find('.link').find('.address').val(addressDetailed);
	var userphone = $(this).parents('.edit').siblings('.infor').find('.phone').text().trim()
	$('form').find('.link').find('#userphone').val(userphone);

console.log(flag)
})
//清空
function clear() {
	$('form').find('.link').find('#username').val("");
	var $address = $('form').find('.currentValue');
	$address.each(function() {
		addressInfor = $(this).val("");
	});
	$('form').find('.link').find('.address').val("");
	$('form').find('.link').find('#userphone').val("");
	$('form').find('.link').find('#telephone').val("");
	$('form').find('.link').find('#postalCode').val("");
};
