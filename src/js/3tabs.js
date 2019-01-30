/* eslint-disable */
$("document").ready(function(){
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
    $('.tab-slider--tabs').removeClass('slide2');
    $('.tab-slider--tabs').addClass('slide1');
	}else if($(this).attr("rel") == "tab3"){
    $('.tab-slider--tabs').removeClass('slide1');
    $('.tab-slider--tabs').addClass('slide2');
  }else{
    $('.tab-slider--tabs').removeClass('slide1');
    $('.tab-slider--tabs').removeClass('slide2');
  }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});
