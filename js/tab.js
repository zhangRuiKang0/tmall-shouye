 window.onload=function(){
	var banner_left1=$(".banner_left1");
	var item=$(".item");
	for(var i=0;i<banner_left1.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		banner_left1[i].index=i;
		banner_left1[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			item[this.index].style.display="block";
		}
		banner_left1[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}

var banner=$(".banner")[0];
var as=$(".bnt",banner);
var lis=$("li",$(".dd")[0]);
var num=0;
animate(as[0],{opacity:1});

var t=setInterval(moveR,2000);
banner.onmouseover=function(){
	clearInterval(t);
};
banner.onmouseout=function(){
	t=setInterval(moveR,2000);
};

for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
		if (num==this.index) {
			return;
		};
        for (var j = 0; j < as.length; j++) {
    	//as[j].style.zIndex=5;
    	animate(as[j],{opacity:0});
    	lis[j].className="xdd";
    };


		lis[this.index].className="baidian";
		//as[this.index].style.zIndex=10;
		animate(as[this.index],{opacity:1});
		num=this.index;
	}
};

function moveR(){
    num++;
    if (num==as.length) {num=0};
    //所有图片层级降低，当前图片层级调高
    for (var i = 0; i < as.length; i++) {
    	//as[i].style.zIndex=5;
    	animate(as[i],{opacity:0});
    	lis[i].className="xdd";
    };
    //as[num].style.zIndex=10;
    animate(as[num],{opacity:1},function(){
    	flag=true;
    });
    lis[num].className="baidian";
}
function moveL(){
    num--;
    if (num<0) {num=as.length-1};
    //所有图片层级降低，当前图片层级调高
    for (var i = 0; i< as.length; i++) {
    	//as[i].style.zIndex=5;
    	animate(as[i],{opacity:0});
    	lis[i].className="xdd";
    };
    //as[num].style.zIndex=10;
    animate(as[num],{opacity:1},function(){
    	flag=true;
    });
    lis[num].className="baidian";
}

var top1_right3=$(".top1_right3");
var topright15=$(".topright15");

top1_right3[0].onmouseover=function(){
        topright15[0].style.display="block";
    }
    top1_right3[0].onmouseout=function(){
        topright15[0].style.display="none";
    }
var top1_right1=$(".top1_right1");
var top1_right11=$(".top1_right11");
top1_right1[0].onmouseover=function(){
        top1_right11[0].style.display="block";
    }
    top1_right1[0].onmouseout=function(){
        top1_right11[0].style.display="none";
    }
var top1_right2=$(".top1_right2");
var top1_right21=$(".top1_right21");
top1_right2[0].onmouseover=function(){
        top1_right21[0].style.display="block";
    }
    top1_right2[0].onmouseout=function(){
        top1_right21[0].style.display="none";
    }
var top1_right4=$(".top1_right4");
var topright13=$(".topright13");   

top1_right4[0].onmouseover=function(){
        topright13[0].style.display="block";
    }
    top1_right4[0].onmouseout=function(){
        topright13[0].style.display="none";
    }
var top1_right5=$(".top1_right5");
var top1_right51=$(".top1_right51");
top1_right5[0].onmouseover=function(){
        top1_right51[0].style.display="block";
    }
    top1_right5[0].onmouseout=function(){
        top1_right51[0].style.display="none";
    }
//楼层跳转    
var floor=$(".floor");
    var arr=[];
    for (var i = 0; i < floor.length; i++) {
        arr.push(floor[i].offsetTop);
    };
    var heights=document.documentElement.clientHeight;
    var search=$(".search")[0];

var Flag=true;
var jump=$(".jump")[0];
var LIS=$("li",jump);
for (var i = 0; i < LIS.length; i++) {
    LIS[i].index=i;
    LIS[i].onclick=function(){
        Flag=false;
        for(var j=0;j<LIS.length;j++){
            LIS[j].style.background="#ccc";
        }
        LIS[this.index].style.background="red";
        var obj=document.body.scrollTop?document.body:document.documentElement;
        animate(document.body,{scrollTop:arr[this.index]},function(){
            Flag=true;});
        animate(document.documentElement,{scrollTop:arr[this.index]},function(){
            Flag=true;});
    }
};
//滚动事件
var sflag=true;
window.onscroll=function(){
//实时的获取当前状态滚轮滚动的距离
//var scrolltop=document.body.scrollTop;
//var scrolltop=document.documentElement.scrollTop;
var obj=document.body.scrollTop?document.body:document.documentElement;
var scrolltop=obj.scrollTop;
//判断滚轮滚动的距离+窗口可视区域高度>=哪个楼层到页面底部的距离
for (var i = 0; i < floor.length; i++) {
    if (scrolltop+heights>=arr[i]+500) {
        //当前楼层下图片进行加载
        var imgs=$("img",floor[i]);
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].src=imgs[j].getAttribute("imgpath");
        };
    };
};
//搜索框
if (scrolltop>=100) {
    if (sflag) {
        sflag=false;
    animate(search,{top:0});};
}else{
    if (!sflag) {
        sflag=true;
    animate(search,{top:-50});};
}
//左侧导航的隐藏与出现
if (scrolltop>=1000) {
    jump.style.display="block"
}else{jump.style.display="none"};

//按钮
if (!Flag) {return;};
for (var i = 0; i < floor.length; i++) {
    if (scrolltop+heights>=arr[i]+200) {
    for(var j=0;j<LIS.length;j++){
        LIS[j].style.background="#ccc";
        }
        LIS[i].style.background="red";
        
    };
};
}
//猫头图
var fll_right=$(".fll_right");
var nav4=$("img",$(".fll")[0]);
for (var i = 0; i < fll_right.length; i++) {
    fll_right[i].index=i;
    fll_right[i].onmouseover=function(){
       /* for(var j=0;j<nav4.length;j++){
            nav4[j].style.top=0;
        }*/
        animate(nav4[this.index],{top:-9},200);
    }
    fll_right[i].onmouseout=function(){
        animate(nav4[this.index],{top:0},200);
    }
};
//关注人数
var pinpaijie_center1=$(".pinpaijie_center1");
var rmtufugai=$(".rmtufugai");
for (var i = 0; i < pinpaijie_center1.length; i++) {
    pinpaijie_center1[i].index=i;
    pinpaijie_center1[i].onmouseover=function(){
       /* for(var j=0;j<rmtufugai.length;j++){
        rmtufugai[j].style.display="none";
        }*/
       rmtufugai[this.index].style.display="block";
    }
    pinpaijie_center1[i].onmouseout=function(){
        rmtufugai[this.index].style.display="none";
    }
};
}