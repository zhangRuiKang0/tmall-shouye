function getClass(className,father){
	//var father=father?father:document;
	var father=father||document;
	//判断浏览器，若有则用它原有的document.getElementsByClassName(className)；
	if(father.getElementsByClassName){//w3c
		return father.getElementsByClassName(className);
	}else{//ie6~8
		var all=father.getElementsByTagName("*");
		var arr=[];
		for (var i = 0; i < all.length; i++) {
			if(check(all[i].className,className)){
				arr.push(all[i]);
			}
		};
		return arr;
	}
}

function check(str,classname){
	var arr=str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==classname){
			return true;
		}else{
			return false;
		}
	};
}

function getContent(obj,val){
	if (obj.textContent) {
		if(val){
			obj.textContent=val;
		}else{
			return obj.textContent;
		}

	}else{
		if(val){
			obj.innerText=val;
		}else{
			return obj.innerText;
		}
	}
}

function getStyle(obj,attr){
	if (getComputedStyle(obj,null)[attr]) {
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

function $(select,father){
	var father=father?father:document;
	var first=select.charAt(0);
	if (first==".") {
		return getClass(select.substring(1),father);
	}else if (first=="#") {
		return father.getElementById(select.substring(1));
	}else if (/^[a-z][a-z1-6]{0,8}$/.test(select)) {
		return father.getElementsByTagName(select);
	};
}


