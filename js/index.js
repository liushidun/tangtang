$(function(){
		$("#aa").hover(
			function(){
				$("#aa").children().eq(1).css({"display":"block"});
			},
			function(){
				$("#aa").children().eq(1).css({"display":"none"});
			}
		);
		$("#bb").hover(
			function(){
				$("#bb").children().eq(1).css({"display":"block"});
			},
			function(){
				$("#bb").children().eq(1).css({"display":"none"});
			}
		);
		$("#cc").hover(
			function(){
				$("#cc").children().eq(1).css({"display":"block"});
			},
			function(){
				$("#cc").children().eq(1).css({"display":"none"});
			}
		);
		//右上角显示信息
		$(".pic_2").hover(
				function(){
					$(".hide").animate({opacity:1},500);
				},
				function(){
					$(".hide").animate({opacity:0},500);
				}
		);
		
		//轮播图
		$(".nav").Slider({
				"width" : 1263,
				"height" : 606,
				"imgs" : ["img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg"],
				"timeSpace" : 2000,
				"btnObj" : {
					"width":20,
					"height":20,
					"bgColor":"#0f8ec5",
					"highBgColor":"#8bedfa",
					"isCircle":false
				}
		});
		
		//底部滑动效果
		$(".zo").hover(
				function(){
					$(".la").animate({opacity:1},500);
				},
				function(){
					$(".la").animate({opacity:0},500);
				}
		);
				
	});