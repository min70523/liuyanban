$(function(){
	let textarea=document.querySelector('textarea');
	let button=document.querySelector('button');
	let tmax=getComputedStyle(textarea,null).maxlength;
	let list=document.querySelector('.list');
	let divs=document.createElement('textarea');
	let p=document.querySelector('p');
	let span=document.querySelector('span');
	let h6=document.querySelector('h6');
	span.innerText=140;
		divs.className='listText';
	textarea.onkeydown=function(e){	
		if(textarea.value.length==0){
			alert('请输入内容*-*')
			return;
	   }
		if(textarea.value.length+=1){
			p.style.opacity=1;
			span.innerText--;
		}
		if(textarea.value.length>=140){
			span.style.color='red';
		}
		
	   if(e.keyCode==13){
	   		h6.style.opacity=1;
			list.appendChild(divs);
			divs.innerText=textarea.value;
			textarea.value=null;
	   }
			
	}

	button.onclick=function(){
		if(textarea.value.length>=1&&textarea.value.length<=tmax){
		list.appendChild(divs);
			h6.style.opacity=1;
			divs.innerText=textarea.value;
			textarea.value=null;
	   }
	   if(textarea.value.length==0){
	   	alert('请输入内容*-*')
	   }		
	}
	
})