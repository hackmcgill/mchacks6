/* eslint-disable */
$("document").ready(function(){
  $(".tab-slider--rbody").hide();
  $(".tab-slider--rbody:first").show();
});

$(".tab-slider--rnav li").click(function() {
  $(".tab-slider--rbody").hide();
  // var activeTab = $(this).attr("rel");
  // $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
    $('.tab-slider--rtabs').addClass('slide');
    $(".tab-slider--rbody:nth-child(2)").show();
	}else{
    $('.tab-slider--rtabs').removeClass('slide');
    $(".tab-slider--rbody:nth-child(1)").show();
	}
  $(".tab-slider--rnav li").removeClass("active");
  $(this).addClass("active");
});