$(function() {
	$('.introduce').load("footer.html");
});
$('.form').Validform({
	tiptype: function(msg, o, cssctl) {
		if (!o.obj.is("form")) {
			var objtip = o.obj.parent('.input_box').siblings('.errorTip ').children(".errorRedIcon");
			var red = o.obj.siblings('.errorRed ');
			var redline = o.obj.siblings('.errorRedLine ');
			var text = o.obj.parent('.input_box').siblings('.errorTip ').children(".errorFont ");
			if (o.type != 2) {
				objtip.css('opacity', '1');
				red.css('display', 'block');
				redline.css('display', 'block');
				text.text(msg);
			} else {
				text.text('');
				objtip.css('opacity', '0');
				red.css('display', 'none');
				redline.css('display', 'none');
			}

		} else {
			
		}
	},
	beforeSubmit: function(curform) {
		var username = $('#tel').val();
		var userpass = $('#pass1').val();
		document.cookie = "username=" + username;
		document.cookie = "userpass=" + userpass;
		$(location).attr('href', 'index.html');
		return false;

	}

});
