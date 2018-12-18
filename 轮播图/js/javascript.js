//此种书写方式避免，定义的变量重复
(function() {
	//定义自动轮播的定时器
	var startLoop = null;
	//获取所有的li 和 p标签
	var li_v = document.querySelectorAll("li");
	var p_v = document.querySelectorAll(".spotPart p");
	var sowingMap = document.querySelector('.sowingMap');
	var p_change = document.querySelectorAll('.loopChange p');
	//业务1：实现3s钟自动循环切换图片,图片切换时提示点跟随切换
	var num = 0;
	function loopSetInterval() {
		
		clearInterval(startLoop);
		startLoop = setInterval(function() {
			for(var i = 0; i < li_v.length; i++) {
				li_v[i].setAttribute("class", "imgSwitch");
				p_v[i].setAttribute("class", " ");
			}
			if(num >= li_v.length - 1) {
				num = 0;
			} else {
				num++;
			}
			li_v[num].setAttribute("class", "imgSwitch imgShow");
			p_v[num].setAttribute("class", "spotColor");
		}, 3000);
	}
	loopSetInterval();

	//业务2：鼠标划到图片上，轮播图停止自动切换，划出后继续播放
	for(var i = 0; i < li_v.length; i++) {
		li_v[i].onmouseover = function() {
			clearInterval(startLoop);
		}
		li_v[i].onmouseout = function() {
			loopSetInterval();
		}
	}

	//业务三：指示点划过切换对应的图片，图片切换时提示点跟随切换
	for(var i = 0; i < p_v.length; i++) {
		p_v[i].index = i;
		p_v[i].onmouseover = function() {
			clearInterval(startLoop);
			for(var i = 0; i < li_v.length; i++) {
				li_v[i].setAttribute("class", "imgSwitch");
				p_v[i].setAttribute("class", " ");
			}
			this.setAttribute("class", "spotColor");
			li_v[this.index].setAttribute("class", "imgSwitch imgShow");
		}
		p_v[i].onmouseout = function() {
			loopSetInterval();
		}
	}

	//业务四：点击上一页下一页切换
	sowingMap.onmouseover = function () {
		for (var i=0;i<p_change.length;i++) {
			p_change[i].style.display = "block";		
		}
	}
	sowingMap.onmouseout = function () {
		for (var i=0;i<p_change.length;i++) {
			p_change[i].style.display = "none";		
		}
	}
	//点击切换上一张
	p_change[0].onclick = function  () {
		console.log(num)
		for(var i = 0; i < li_v.length; i++) {
			li_v[i].setAttribute("class", "imgSwitch");
			p_v[i].setAttribute("class", " ");
		}
		if (num <= 0) {
			num = 4;
			li_v[num].setAttribute("class", "imgSwitch imgShow");
			p_v[num].setAttribute("class", "spotColor");
		} else if(num <= 4){
			li_v[num-1].setAttribute("class", "imgSwitch imgShow");
			p_v[num-1].setAttribute("class", "spotColor");
			num--;
		}
	}
	//点击切换下一张
	p_change[1].onclick = function  () {
		console.log(num)
		for(var i = 0; i < li_v.length; i++) {
			li_v[i].setAttribute("class", "imgSwitch");
			p_v[i].setAttribute("class", " ");
		}
		if (num >= 4) {
			num = 0;
			li_v[num].setAttribute("class", "imgSwitch imgShow");
			p_v[num].setAttribute("class", "spotColor");
		} else if(num >= 0){
			li_v[num+1].setAttribute("class", "imgSwitch imgShow");
			p_v[num+1].setAttribute("class", "spotColor");
			num++;
		}
	}
})();