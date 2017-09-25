$(function(){
	let box=$('.box')[0];
	let bimg=$('img',box)[0];
	let son=$('.son')[0];
	let simg=$('img',son)[0];
	let zhe=$('.zhe',box)[0];
	let op=$('.op',box)[0];
	console.log(zhe)
	let bw=box.offsetWidth,      //bw   siw      
		bh=box.offsetHeight,     //zw  sw
		zw=zhe.offsetWidth,
		zh=zhe.offsetHeight,
		sw=son.offsetWidth,
		sh=son.offsetHeight,
		siw=simg.offsetWidth,
		sih=simg.offsetHeight
		;
	let bili=sw/zw;
	op.onmousemove=function(e){
		zhe.style.opacity=1;
		let ox=e.offsetX-zw/2, oy=e.offsetY-zh/2;
		if(ox>=bw-zw){
			ox=bw-zw;
		}
		if(ox<=0){
			ox=0;
		}
		if(oy>=bh-zh){
			oy=bh-zh;
		}
		if(oy<=0){
			oy=0;
		}	
		zhe.style.left=`${ox}px`;
		zhe.style.top=`${oy}px`;
		simg.style.width=`${bw*sw/zw}px`;
		simg.style.height=`${bh*sh/zh}px`;
		simg.style.left=`${-bh*ox/zh}px`;
		simg.style.top=`${-bh*oy/zh}px`;			
	}
})
// textarea
// 判断输入的字符长度   
// 点击 创建元素，内容放进来，清空上边内容