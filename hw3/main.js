'use strict';
$(document).ready(function(){
  var source,template;
$.ajax({
	 async: true,
    crossDomain: true,
url: 'https://currencyconverter.p.mashape.com/availablecurrencies/',
success:function(data){
var str_data=JSON.stringify(data);
source   = $("#entry-template").html();
template = Handlebars.compile(source);
var context;
var i;
var d="";
var ar=[];
for(i in data)
{
ar[i]=data[i].id;
d+="<option>"+ar[i]+"</option>";
}
context={id:d};
console.log(context);
$("#d1").html(template(context));
$("#d2").html(template(context));
},
error: function (err) {
console.log(err);
    },
 beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8');
    }

});
var xx,xx1,xx2;
$("#t1,#d1,#d2").change(function(){
xx=$("#t1").val();
xx1=$("#d1").val();
xx2=$("#d2").val();
 $.ajax({
    async: true,
    crossDomain: true,
    url: 'https://currencyconverter.p.mashape.com/?from='+xx1+'&from_amount='+xx+'&to='+xx2,
    type: 'GET',
     success: function (data) {
var str=JSON.stringify(data);
var amount={price:data.to_amount};
console.log(amount);
$('#t2').html(template(amount));
 },
    error: function (err) {
    console.log(err);
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8');
    }
  });
});
});