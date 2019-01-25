/* eslint-disable */
$("document").ready(function(){
  $(".tab-slider--daybody").hide();
  $(".tab-slider--daybody:first").show();
});

$(".tab-slider--daynav li").click(function() {
  $(".tab-slider--daybody").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
		$('.tab-slider--daytabs').addClass('slide');
	}else{
		$('.tab-slider--daytabs').removeClass('slide');
	}
  $(".tab-slider--daynav li").removeClass("active");
  $(this).addClass("active");
});