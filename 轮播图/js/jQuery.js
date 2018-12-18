(function() {
		//获取元素的个数
		var count = $('.imgSwitch').length;
		var num = 0;
		var start = null;
		//业务1：实现3s钟自动循环切换图片,图片切换时提示点跟随切换,图片切换时有渐变的效果
		function loopStart() {
			clearInterval(start);
			start = setInterval(function() {
				//首先清楚所有样式
				$('.imgSwitch').hide();
				//取余方式对num取值进行判断
				num = (num + 1) % count;
				//图片渐入
				$('.imgSwitch').eq(num).fadeIn(1000);
				$('.spotPart p').eq(num).addClass("spotColor").siblings().removeClass("spotColor");
			}, 2000);
		}
		loopStart();

		//业务2：鼠标划到图片上，轮播图停止自动切换，划出后继续播放
		$('.imgSwitch').mouseover(function() { //鼠标划过停止
			clearInterval(start);
		});
		$('.imgSwitch').mouseout(function() { //鼠标划出
			loopStart();
		});

		//业务三：指示点划过切换对应的图片，图片切换时提示点跟随切换
		$('.spotPart p').mouseover(function() {
			clearInterval(start);
			//首先清楚所有样式
			$('.imgSwitch').hide();
			$('.imgSwitch').eq($(this).index()).fadeIn(1000);
			$('.spotPart p').eq($(this).index()).addClass("spotColor").siblings().removeClass("spotColor");
		});
		$('.spotPart p').mouseout(function() {
			loopStart();
		});
		//业务四：点击上一页下一页切换
		$('.sowingMap').mouseover(function() {
			clearInterval(start);
			$('.loopChange p').show();
		});
		$('.sowingMap').mouseout(function() {
			loopStart();
			$('.loopChange p').hide();
		});
		$('.preImg').click(function() {
			$('.imgSwitch').hide();
			if(num <= 0) {
				num = 4;
				$('.imgSwitch').eq(num).fadeIn(1000);
				$('.spotPart p').eq(num).addClass("spotColor").siblings().removeClass("spotColor");
			}
			else if(num <= 4) {
				$('.imgSwitch').eq(num-1).fadeIn(1000);
				$('.spotPart p').eq(num-1).addClass("spotColor").siblings().removeClass("spotColor");
				num--;
			}
		});
		$('.nextImg').click(function() {
			$('.imgSwitch').hide();
			if(num >= 4) {
				num = 0;
				$('.imgSwitch').eq(num).fadeIn(1000);
				$('.spotPart p').eq(num).addClass("spotColor").siblings().removeClass("spotColor");
			}
			else if(num >= 0) {
				$('.imgSwitch').eq(num+1).fadeIn(1000);
				$('.spotPart p').eq(num+1).addClass("spotColor").siblings().removeClass("spotColor");
				num++;
			}
		});
})();