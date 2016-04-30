
//�����·������й��࣬��Щ�������ǲ���DOM�ģ�����һ����DOM�Ķ������͵ı���
var DOM={};//�����·�����������DOM������

DOM.getIndex=function (ele){//�������
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
DOM. offset=function(ele){//��������Ԫ�ؾ����ĵ�������ƫ����
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

DOM.listToArray=function (list){//������ת��Ϊ����
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
DOM.siblings=function (ele){//������е��ֵܽڵ�
    var parent=ele.parentNode;
var siblings=parent.children;//����Ԫ�ؽڵ����ע�ͽڵ㣬��childNodes�����Ĵ����٣�chilNodes�����еĽڵ�
    var a=[];
    for(var i=0;i<siblings.length;i++){
        if(siblings[i].nodeType===1&&siblings[i]!==ele){
            a.push(siblings[i]);
        }
    }
    return a;
}
DOM.siblings1=function (ele){//������е��ֵܽڵ�
    var pre=siblings1.previousSibling;//����Ԫ�ؽڵ����ע�ͽڵ㣬��childNodes�����Ĵ����٣�chilNodes�����еĽڵ�
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

DOM.nex=function (ele){//������ڵܵ�Ԫ�ؽڵ�
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
function pre(ele) {//������ڸ��Ԫ�ؽڵ�
}

DOM.nextSiblings = function (ele) {//������еܵ�Ԫ�ؽڵ�
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


function pres(ele) {//������и��Ԫ�ؽڵ�
        var pre = this.prev(curEle), ary = [];
        while (pre) {
            ary.unshift(pre);
            pre = this.prev(pre);
        }
        return ary;
    
}
DOM.children=function(ele,str){//���ele������Ԫ���ӽڵ�,�����Ի��ָ����ǩ������Ԫ��
    var a=[];
    var childrenNodes=ele.childNodes;
    //str=str.toUpperCase();
    if(typeof str=="string"){//�жϵڶ��������Ƿ���ȷ
     //��ǩ��Ҫ��ָ���ı�ǩ����ͬ����Ҫ��Ԫ�ؽڵ�
        for(var i=0;i<childrenNodes.length;i++){
            child=childrenNodes[i];//����ȫ�ֵ�
            if(child.tagName===str.toUpperCase()){//tagNameֻ��Ԫ�ص����ԣ�nodeName�ǽڵ������
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
        throw new Error("�����쳣");
    }
    return a;
}
DOM.insertAfter=function (oldEle,newEle){//��ʾ��newEle��ӵ�oldEle����
    //û�б�Ҫ����д
    //if(oldEle.nextSibling){
    //    oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling);//���ڶ���������null���൱��appendChild
    //}else{
    //    oldEle.parentNode.appendChild(newEle);
    //}
    oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling);
}
DOM.prepend=function (parent,child){//��childԪ����ӵ�parent�ĵ�һ����Ԫ�أ���appenChild���Ӧ
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

DOM.getElesByClass=function(str,context){//�ڶ��������ǵ���ɸѡ�������ģ����ҷ�Χ��
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


