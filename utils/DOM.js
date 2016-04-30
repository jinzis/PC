
//对以下方法进行归类，这些方法都是操作DOM的，则定义一个叫DOM的对象类型的变量
var DOM={};//把以下方法都定义在DOM属性上

DOM.getIndex=function (ele){//获得索引
    var index=0;
    var previous=ele.previousSibling;
    while(previous){
        if(previous.nodeType===1){
            index++;
        }
        previous=previous.previousSibling;
    }
    return index;
}
DOM. offset=function(ele){//计算任意元素距离文档顶部的偏移量
    var l=ele.offsetLeft;
    var t=ele.offsetTop;
    var p=ele.offsetParent;
    while(p){
        if(window.navigator.userAgent.indexOf("MSIE 8")){
            l+= p.offsetLeft;
            t+= p.offsetTop;
        }else{
            l+= p.offsetLeft+p.clientLeft;
            t+= p.offsetTop+ p.clientTop;
        }
        p= p.offsetParent;
    }
    return {top:t,left:t};

}

DOM.listToArray=function (list){//类数组转化为数组
    try{
       return [].slice.call(list,0);
    }catch(e){
        var a=[];
        for(var i=0;i<list.length;i++){
            a[a.length]=list[i];
        }
    }
    return a;
}
DOM.siblings=function (ele){//获得所有的兄弟节点
    var parent=ele.parentNode;
var siblings=parent.children;//所有元素节点包括注释节点，比childNodes搜索的次数少，chilNodes是所有的节点
    var a=[];
    for(var i=0;i<siblings.length;i++){
        if(siblings[i].nodeType===1&&siblings[i]!==ele){
            a.push(siblings[i]);
        }
    }
    return a;
}
DOM.siblings1=function (ele){//获得所有的兄弟节点
    var pre=siblings1.previousSibling;//所有元素节点包括注释节点，比childNodes搜索的次数少，chilNodes是所有的节点
    var a=[];
    while(pre){
        if(pre.nodeType===1){
            a.push(pre);
    }
   pre=pre.previousSibling;
    }
    a.reverse();
    var nex=siblings1.nextSibling;
    while(nex){
        if(nex.nodeType===1){
            a.push(nex);
        }
        nex=nex.nextSibling;
    }
    return a;
}

DOM.nex=function (ele){//获得相邻弟弟元素节点
if(typeof ele.nextElementSibling=="object"){
    return ele.nextElementSibling;
}else{
    var next=ele.nextSibling;
    while(next){
        if(next.nodeType===1){
            return next;
        }
        next=next.nextSibling;
    }

}
    return null;
}
function pre(ele) {//获得相邻哥哥元素节点
}

DOM.nextSiblings = function (ele) {//获得所有弟弟元素节点
        var a = [];
        var nexts = ele.nextSibling;
        while (nexts) {
            if (nexts.nodeType === 1) {
                a.push(nexts);
            }
            nexts = nexts.nextSibling;
        }
        return a;
    }


function pres(ele) {//获得所有哥哥元素节点
        var pre = this.prev(curEle), ary = [];
        while (pre) {
            ary.unshift(pre);
            pre = this.prev(pre);
        }
        return ary;
    
}
DOM.children=function(ele,str){//获得ele的所有元素子节点,还可以获得指定标签名的子元素
    var a=[];
    var childrenNodes=ele.childNodes;
    //str=str.toUpperCase();
    if(typeof str=="string"){//判断第二个参数是否正确
     //标签名要和指定的标签名相同，还要是元素节点
        for(var i=0;i<childrenNodes.length;i++){
            child=childrenNodes[i];//不是全局的
            if(child.tagName===str.toUpperCase()){//tagName只是元素的属性，nodeName是节点的属性
                a.push(child);
            }
        }
    }
    else if(str===undefined){
        for(var i=0;i<childrenNodes.length;i++){
        var child=childrenNodes[i];
        if(child.nodeType===1){
            a.push(child);
        }
    }
    }else{
        throw new Error("程序异常");
    }
    return a;
}
DOM.insertAfter=function (oldEle,newEle){//表示把newEle添加到oldEle后面
    //没有必要这样写
    //if(oldEle.nextSibling){
    //    oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling);//若第二个参数是null，相当于appendChild
    //}else{
    //    oldEle.parentNode.appendChild(newEle);
    //}
    oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling);
}
DOM.prepend=function (parent,child){//把child元素添加到parent的第一个子元素，和appenChild项对应
parent.insertBefore(child,parent.firstChild);
}


DOM.addClassName=function(ele,strClass){
    var reg=new RegExp("(^| )"+strClass+"( |$)");
    if(!reg.test(ele.className)){
        ele.className+=" "+strClass;
    }
}
DOM.removeClass=function(ele,strClass){
    var reg=new RegExp("(^| )"+strClass+"( |$)","g");
    ele.className=ele.className.replace(reg," ");
}

DOM.getElesByClass=function(str,context){//第二个参数是当次筛选的上下文（查找范围）
    var regTrim=/^ +| +$/g;
    str=str.replace(regTrim,"");
    var aClass=str.split(/ +/);
    context=context||document;
    var eles=document.getElementsByTagName("*");
    for(var i=0;i<aClass.length;i++){
        var reg = new RegExp("(?:^| )" + aClass[i] + "(?: |$)");
        var a=[];
        for(var j=0;j<eles.length;j++){
            if(reg.test(eles[j].className)){
                a.push(eles[j]);
            }
        }
        eles=a;
    }
    return eles;
}


