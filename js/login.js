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
var oLgin=document.querySelector('.login');
oLgin.onclick=function () {
		var cookie = document.cookie;
		cookie=cookie.replace(/=/g,';');
		var arr=cookie.split(';');
		console.log(arr)
		var telText = $('#tel').val();
		var passText=$('#pass1').val();
		console.log(telText);
		console.log(passText);
		if(telText==arr[1]&&passText==arr[3]){
			window.location.href="index.html";
		}else{
			var errorFont=document.querySelector('.errorFont');
			console.log(errorFont);
			errorFont.innerText ='账号或密码错误!'
			errorFont.style.display='block';
			var errorRedIcon=document.querySelector('.errorRedIcon');
			errorRedIcon.style.display='block';
		}
}
