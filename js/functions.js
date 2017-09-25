function getClass(classname,ranger){
	ranger=ranger?ranger:document;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=ranger.getElementsByClassName('*');
		 for(var i=0;i<all.length;i++){
		 	if(checkClass(all[i].className,classname)){   
		 		//当前元素是否包含传进来的类名
		 		//         当前元素的类名，传进来的类名
		 		newarrr.push(all[i]);
		 	}
		 }
		 return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split('');  
	//当前元素的类名拆分
	for(var i=0;i<arr.length;i++){   //遍历
		if(arr[i]==classname){       //存在返回true，不存在false
			return true;
		}
	}
	return false;
}
//$获取指定元素
//$(select)
//select  字符串，类似选择器  函数 window.onload->重载
function $(select,ranger){
	if(typeof select=='string'){
		ranger=ranger?ranger:document;
		var first=select.charAt(0);
		if(first=='.'){
			return getClass(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}else if(typeof select=='function'){
		window.addEventListener('load',select);
	}
	
}
//正则  创建一个正则对象   方法-test  满足方法，true 不满足，false
///^[a-z][a-z1-6]{0,7}$/.test(select);
 //第一位字符  第二位  出现次数，最少0次，最多7次
 /////////////////////////////////////////////////
 ///// 写一个对象让他动起来    对象  obj    
// 属性：让谁飘起来box   最大距离    速度   
// 构造函数与构造函数的方法都要用，就定义为属性
// 只在某个方法要用的，就定义为变量
// 方法：功能 move 
// 对象的方法为move
 function Float(obj){
		this.obj=obj;
		this.MaxX=window.innerWidth-this.obj.offsetWidth;
		this.MaxY=window.innerHeight-this.obj.offsetHeight;
		console.log(this.MaxX)
		this.speedX=10;
		this.speedY=10;
	}
	
	Float.prototype.move = function(){
		console.log(this)
		this.t=setInterval(fn,30);
		let that=this;  
		//或者箭头函数
		function fn(){		
			let left=that.obj.offsetLeft+that.speedX;
			let top=that.obj.offsetTop+that.speedY;
			console.log(left)
			if(left>=that.MaxX){
				left=that.MaxX;
				that.speedX*=-1;
			}else if(top>=that.MaxY){
				top=that.MaxY;
				that.speedY*=-1;
			}
			if(left<=0){
				left=0;
				that.speedX*=-1;
			}else if(top<=0){
				top=0;
				that.speedY*=-1;
			}
			that.obj.style.left=left+'px';
			that.obj.style.top=top+'px';
		}
	}
	Float.prototype.stop = function(){
		clearInterval(this.t);
	}
	Float.prototype.resize=function(){
		this.MaxX=window.innerWidth-this.obj.offsetWidth;
		this.MaxY=window.innerHeight-this.obj.offsetHeight;
	}
// }