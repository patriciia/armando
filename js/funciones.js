// JavaScript Document
$(document).on("pagecreate","#Empresa",function(){
	$("p").on("swipe" ,function(){
		$("span").text("Me gusta la musica electronica!");
	});
});