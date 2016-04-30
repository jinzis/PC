function on(ele,type,fn){
	if(ele.addEventListener){
		ele.addEventListener(type,fn,false);
		return;	
	}
	if(!ele["aEvent"+type]){
		ele["aEvent"+type]=[];
		ele.attachEvent("on"+type,function(){run.call(ele)});
	}
	var a=ele["aEvent"+type];
	for(var i=0;i<a.length;i++){
		if(a[i]==fn)return;	
	}
	a.push(fn);
	
}

function run(){
	var e=window.event;
	var type=e.type;
	if(!e.target){
		e.target=e.srcElement;
		e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
		e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
		e.preventDefault=function(){e.returnValue=false;};
		e.stopPropagation=function(){e.cancelBubble=true;}
		
	}
	var a=this["aEvent"+type];
	if(a){
		for(var i=0;i<a.length;i++){
			if(typeof a[i]=="function"){
				a[i].call(this,e);	
			}else{
				a.splice(i,1);
				i--;
			}
		}		
	}
}
function off(ele,type,fn){
	if(ele.removeEventListener){
		ele.removeEventListener(type,fn,false);
		return;	
	}
	
	var a=ele["aEvent"+type];
	if(a){
		for(var i=0;i<a.length;i++){
			if(a[i]==fn){
				a[i]=null;
				return;	
			}
		}
	}	
}

function processThis(fn,obj){
	return function(e){fn.call(obj,e);}
}
function Drag(ele){
	this.ele=ele;
	this.x=null;
	this.y=null;
	this.mx=null;
	this.my=null;
	this.DOWN=processThis(this.down,this);
	this.Up=processThis(this.up,this);
	this.MOVE=processThis(this.move,this);
	on(ele,"mousedown",this.DOWN);
}
Drag.prototype.down=function (e) {
	this.x=this.ele.offsetLeft;
	this.y=this.ele.offsetTop;
	this.mx=e.pageX;
	this.my=e.pageY;
	if(this.ele.setCapture){
		this.ele.setCapture();
		on(this.ele,"mousemove",this.MOVE);
		on(this.ele,"mouseup",this.Up);
	}else{
		on(document,"mousemove",this.MOVE);
		on(document,"mouseup",this.Up);
	}
	e.preventDefault();
};
Drag.prototype.move=function (e) {
	this.ele.style.left = e.pageX + this.x - this.mx + "px";
	this.ele.style.top = e.pageY + this.y - this.my + "px";
};
Drag.prototype.up=function (e) {
	if(this.ele.releaseCapture){
		this.ele.releaseCapture();
		off(this.ele,"mousemove",this.MOVE);
		off(this.ele,"mouseup",this.Up);
	}else{
		off(document,"mousemove",this.MOVE);
		off(document,"mouseup",this.Up);
	}
};




