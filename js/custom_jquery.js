$(document).ready(function(){

	 
$('#mainhead').fadeIn(1000);
//$('#bannerContent').fadeIn(5000);
$('#navigate').show(1000);
$('#contentHome').slideDown(2000);


	
/* dim dip */
var i=0;
setInterval(
function(){
i=(i+1)%4;
$("#bannerContent li:eq("+i+")").each( function(ind,ele){
$(this).fadeIn(1000).delay("slow").fadeOut(3000);
});
}
, 5000);



$('#mheading').hover(
	function(){
		$('#mainhead').css("background-color","#000000");
		$('#mheading').css("box-shadow","1px 2px 15px #ffffff");

	},
	function(){
		$('#mainhead').css("background-color","#ffffff");
		$('#mheading').css("box-shadow","1px 2px 15px #000000");
	}
);

/*
$('#mainhead').hover(
	function(){
		var i=0;var j=0;
		for(var k=0;k<1800;k++){
		i=(i+1)%3;
		var img = "i"+(i+j);
		//alert(img);
		var nxtImg = "i"+(i+1);
		// alert(nxtImg);
		var src = $('#mheading').attr("src").replace(img, nxtImg);
         // alert(src);
            $('#mheading').attr("src", src);
            $('#mheading').fadeOut('2000').fadeIn('1000');
            if(i==2){
            	j=3;
            }else{
            	j=0;
            }
           }
	},
	function(){
	}
);
*/

$('#home').click(function(){
$('#contentAbout').fadeOut(500);
$('#contentGallery').fadeOut(500);
$('#contentContact').fadeOut(500);
$('#contentHome').show(2000);
$('body').css("background","url(images/bg/slide1.jpg) no-repeat fixed");
$('body').css("background-size","100% 100%");



});

$('#aboutme').click(function(){
$('#contentHome').fadeOut(500);
$('#contentGallery').fadeOut(500);
$('#contentContact').fadeOut(500);
$('#contentAbout').show(2000);
$('body').css("background","url(images/bg/bg_yellow.jpg) no-repeat fixed");
$('body').css("background-size","100% 100%");

});


$('#gallery').click(function(){
	
$('#contentAbout').fadeOut(500);
$('#contentHome').fadeOut(500);
$('#contentContact').fadeOut(500);
$('#contentGallery').show(2000);
$('body').css("background","none");
$('body').css("background-color","#000000");
$('body').css("background","url(images/bg/bg_turt.jpg) no-repeat fixed");
$('body').css("background-size","100% 100%");


});

$('#contact').click(function(){
$('#contentAbout').fadeOut(500);
$('#contentHome').fadeOut(500);
$('#contentGallery').fadeOut(500);
$('#contentContact').show(2000);
$('body').css("background","url(images/bg/bg_red.jpg) no-repeat fixed");
$('body').css("background-size","100% 100%");

});


});

$(window).load(function(){
$('#spinner').fadeOut("1000");
//$('.bxslider').bxSlider();
});

// ]]>


