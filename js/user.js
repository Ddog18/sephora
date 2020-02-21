//判断订单列表 是否有订单
var isTr = $('.order_list').find('tbody').find('tr').length;
console.log(isTr)
if(isTr==0){
	$('.order_list').children('.tips').show();
}else{
	$('.order_list').children('.tips').hide();
}
