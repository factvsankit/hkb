$(function(){
	$('.toggle a').click(function(e){
		$('.mynav').addClass('show-menu');
		$('.body-inactive').fadeIn(250);
		e.preventDefault();
	});
	$('.body-inactive, .close-menu').click(function(e){
		$('.mynav').removeClass('show-menu');
		$('.body-inactive').fadeOut(250);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();


	// Window Width/Height
	wwwh = function(){
		ww = $(window).width();
		wh = $(window).height();
	}
	wwwh();

	// Discount Bar Show Hide
	$('.hideDiscountBar a').click(function(e){
		$('.ob-text').slideUp(350);
		$('.showDiscountBar').fadeIn(450);
		e.preventDefault();
	})
	$('.showDiscountBar a').click(function(e){
		$('.ob-text').slideDown(350);
		$('.showDiscountBar').fadeOut(150);
		e.preventDefault();
	})

	// Vat Calculation Toggle
	$('#exVat').click(function(e){
		$(this).addClass('activeVat');
		$('#incVat').removeClass('activeVat');
		$('.price').each(function(){
			findPrice = $(this).data('wo-vat');
			console.log(findPrice);
			$(this).html(findPrice);
		})
		e.preventDefault();
	})	
	$('#incVat').click(function(e){
		$(this).addClass('activeVat');
		$('#exVat').removeClass('activeVat');
		$('.price').each(function(){
			findPrice = $(this).data('w-vat');
			$(this).html(findPrice);
		})
		e.preventDefault();
	})	

	// Equivalent Columns in a Row
	equiHeightColumns = function(){
		$('.equi-row').each(function(){
			maxHeight = -1;
			$(this).find('.equi-col').each(function() {
				console.log($(this).height());
				if ($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			});
			$(this).find('.equi-col').css('min-height',maxHeight + 'px');
		})
	}
	equiHeightColumns();

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
		equiHeightColumns();
	})
})