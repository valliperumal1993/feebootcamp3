'use strict';
$(document).ready(function(){
	$('#but1').on('click',function(){
//Use spaces for indentation of code blocks to improve code readability
		$.ajax({
			url:'http://www.google.com/finance/info?q=AAPL',
			type:"get",
			success:function(data)
			{
//Avoid leaving back console.log statements in production code
				console.log(data);
			}
		})
	})

//Use single "var" declaration per scope as var accepts multiple declarations
var source   = $("#entry-template").text();
var template = Handlebars.compile(source);
var context = { body: "gt"};
var html    = template(context);
$('.body').html(template);
});