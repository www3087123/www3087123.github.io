//首页、开放平台、安全保障 轮播图
//var upsSwiper = new Swiper('.broadcast', {
//	speed: 1000,
//	longSwipes: false,
//	loop: true,
//	autoplay: {
//		disableOnInteraction: false,
//	},
//	navigation: {
//		nextEl: '.swiper-button-next',
//		prevEl: '.swiper-button-prev',
//	},
//	pagination: {
//		el: '.swiper-pagination',
//		clickable: true,
//	},
//	on: {
//		autoplayStop: function() {
//			this.$el.find(".ups-icon-videoplay").addClass('stop-status');
//		},
//		autoplayStart: function() {
//			this.$el.find(".ups-icon-videoplay").removeClass('stop-status');
//		},
//	}
//});


//upsSwiper.$el.find(".ups-icon-videoplay").on('click', function() {
//	if (upsSwiper.autoplay.running) {
//		upsSwiper.autoplay.stop();
//	} else {
//		upsSwiper.autoplay.start();
//	}
//});

//swiperHeight = upsSwiper.height
//
//window.onscroll = function scroll() {
//	if (window.pageYOffset / upsSwiper.height < 1) {
//		scrollScale = window.pageYOffset / swiperHeight;
//	} else {
//		scrollScale = 1;
//	}
//
//	upsSwiper.slides.find(".img").transform('translateY(-' + 18 * scrollScale + '%)') //滚动一屏swiper高度则图片向上18%（范围0-40）
//
//}


   var swiper = new Swiper('.direction', {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   });

    var swiper = new Swiper('.friend', {
      slidesPerView: 4,
      spaceBetween: 25,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   });
   
   
   
// $(document).ready(function(){
//      $('.service-platform-box').hover(function() {
//      $(".service-platform-box div").css('display', 'none');
//      $(".service-platform-box a").css('display', 'block');
//      }, function() {
//	    $(".service-platform-box div").css('display', 'block');
//	    $(".service-platform-box a").css('display', 'none');
//      });
// })


//返回顶部
	 $(document).ready(function(){
			  //首先将#back-to-top隐藏
			  $("#back-to-top").hide();
			  //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
			  $(function () {
			    $(window).scroll(function(){
			    if ($(window).scrollTop()>100){
			    	$("#back-to-top").fadeIn(100);
			    }
			    else{ $("#back-to-top").fadeOut(100);
			    }
			});
			    //当点击跳转链接后，回到页面顶部位置
		    $("#back-to-top").click(function(){
		    $('body,html').animate({scrollTop:0},"speed");
		    return false;
			    });
			});
		});