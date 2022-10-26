$('.desc + p').hide();
		
$(".desc").click(function() {
    $(this).css('background-image','url()');
			
    $(this).next('p').show();
			
    var parentli = $(this).parent('li');
			
    var lis = parentli.siblings('li');
			
    lis.children('p').css('background-image','url()');
			
	lis.children('p').hide();
});
