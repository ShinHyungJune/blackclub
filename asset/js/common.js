function autoHeight(){
	var hei = $(window).outerHeight();
	var box = $(".space-box");
	var len = $(".space-box-inner.white-full").length;
	
	$(".space-box").css({"min-height" : hei + "px"});
	if(len > 0){
		var margin = $(".space-box-inner.white-full").siblings(".space-box-inner").outerHeight();
		var innerHei = hei - margin;
		$(".space-box-inner.white-full").css({"min-height" : innerHei + "px"});
		$(".inner-space-box").css({"min-height" : innerHei + "px"});	
	}
}

function popupOpen(type){
	var box = $(".popup-box .box[data-name=" + type + "]");

	if(type == "insert"){
		$(".popup-box").addClass("black");
	}else{
		$(".popup-box").removeClass("black");
	}

	$("html, body, .popup-box").addClass("fixed");
	box.addClass("active");
	box.siblings().removeClass("active");
}

function popupClose(){
	$("html, body, .popup-box").removeClass("fixed");
}

/* 체크박스 전체동의 */
$(document).on("change",".all-check-box input",function(){
	$(".agree-list input").prop("checked" , $(this).prop("checked"));
});

$(document).on("change",".agree-list input",function(){
	var len = $(".agree-list input").length;
	var checklen = $(".agree-list input:checked").length;

	if(len > checklen) $(".all-check-box input").prop("checked",false);
	if(len == checklen) $(".all-check-box input").prop("checked",true);
}); 

/* 인풋박스 블러 */
$(document).on("blur",".input-box input",function(){
	var box = $(this).closest(".input-box");

	var redex = /\s/ig;
	var value = $(this).val().toString().replace(redex, "").length;
	
	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");
	}
});

/* 인풋박스 패스워드 */
$(document).on("click",".pw-toggle",function(){
	var parent = $(this).closest(".input-box");

	parent.toggleClass("password");
	if(parent.hasClass("password") == true){
		parent.find("input[type=password]").attr("type","text");
	}else{
		parent.find("input[type=text]").attr("type","password");       
	}
});

/* 셀렉박스 옵션선택 포커스 */
$(document).on("change",".select-box select",function(){
	var box = $(this).closest(".select-box");
	var opt = $(this).find("option:selected").val();
	var redex = /\s/ig;
	var value = opt.toString().replace(redex, "").length;
	// 띄어쓰기를 제외한 글자가 존재하다면
	if(value > 0){
		box.addClass("active");
	}else{
		box.removeClass("active");	   
	}
});

/* 주변클릭 */
$(document).click(function(event){
	var modal = $(event.target);
	
	if(modal.is(".popup-box")){
		$("html, body, .popup-box").removeClass("fixed");
	}
}); 

$(document).ready(function(){
	autoHeight();
});

$(window).resize(function(){
	autoHeight();
});