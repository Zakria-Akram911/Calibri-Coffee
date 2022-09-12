$(document).ready(function(){
	$(".hamburger button").click(function(){
		$(this).toggleClass('active');
        $("nav.navbar").toggleClass('active');
	});
}); 
$(document).ready(function(){
	$(".hamburger button").click(function(){
        $(".header-width1").toggleClass('active');
	});
});