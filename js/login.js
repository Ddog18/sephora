$('.form').Validform({
	tiptype: function(msg, o, cssctl) {
		if (!o.obj.is("form")) {
			var objtip = o.obj.parents('.input_box').siblings('.error_tip ').children(".errorRedIcon");
			var red = o.obj.siblings('.error_Icon');
			var redline = o.obj.siblings('.errorRedLine');
			var text = o.obj.parents('.input_box').siblings('.error_tip ').children(".errorFont ");
			
			if (o.type != 2) {
				objtip.css('display', 'block');
				red.css('display', 'block');
				redline.css('display', 'block');
				text.css('display','block');
				text.text(msg);
			} else {
				text.text('');
				objtip.css('display', 'none');
				red.css('display', 'none');
				redline.css('display', 'none');
				text.css('display','none');
			}
			console.log(o.obj.is("form"))

		} else {

		}
	},

});

$('.login').click(function () {
	var telText = $('#tel').val();
	var passText=$('#pass1').val();
	if(telText==$.cookie('username')&&passText==$.cookie('userpass')){
		document.cookie="isLogin="+true;
		window.location.href="index.html";
	}else{
		var errorFont=document.querySelector('.errorFont');
		console.log(errorFont);
		$('.errorFont').text('账号或密码错误!');
		$('.errorFont').css('display','block');
		$('.errorRedIcon').css('display','block')
	}
})
