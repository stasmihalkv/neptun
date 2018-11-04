
$(document).ready(function(){
       $('.menu_toggle_header-block1').click(function(){
       $('.header__block1-nav li').slideToggle(300,function(){
         if($(this).css('display')==='none'){
                    $(this).removeAttr('style');
                }
            });
    });
    
   $('.menu_toggle_header-block3').click(function(){
       $('.header__block3-nav ').slideToggle(300,function(){
         if($(this).css('display')==='none'){
                    $(this).removeAttr('style');
                }
            });
    });
    
    $('.owl-carousel').owlCarousel({
    loop:true,  
    items:1,
    navText: ["<img src='css/owl-prev.png'>", "<img src='css/owl-next.png'>"],    
    });
    
    var owl=$(".owl-carousel");
	owl.owlCarousel();
	$(".block1_next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".block1_prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});
    
//    var block2Button = $('block2__button')
//
//   if ($(window).width() < 480) {
//       $('.header__block3').append(block2Button)
//}
 
})