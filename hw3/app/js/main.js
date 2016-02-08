'use strict';
$(document).ready(function(){
	$('#but1').on('click',function(){$.ajax({
url:'http://www.google.com/finance/info?q=AAPL',
type:"get",
success:function(data)
{console.log(data);}
	})})


var source   = $("#entry-template").text();
var template = Handlebars.compile(source);
var context = { body: "gt"};
var html    = template(context);
$('.body').html(template);
});