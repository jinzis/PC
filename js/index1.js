/**
 * Created by jinxin on 2016-04-27.
 */

function scroll() {
    var page=1;
    var pageIndex=0;
    var right=document.getElementById("right");
    var left=document.getElementById("left");
    var  oUl=document.getElementById("menu1").getElementsByTagName("ul")[0];
    var width = parseInt( oUl.offsetWidth);
        left.onclick=function () {
            pageIndex=pageIndex>0?(pageIndex-1):page;
            oUl.style.marginLeft='-' + (pageIndex*width) + 'px';
            };
right.onclick=function () {
    pageIndex = (pageIndex<page)?(pageIndex+1):0;
    oUl.style.marginLeft='-' + (pageIndex*width) + 'px';
}

}
scroll();
function scroll1() {
    var oDiv=document.getElementById("div1");
    var right=document.getElementById("right1");
    var left=document.getElementById("left1");
    var oInner=oDiv.getElementsByTagName("div");
    var a1=document.getElementById("a1").getElementsByTagName("a");
    var width=parseInt( oInner[0].offsetWidth);
    var newDiv=oInner[0].cloneNode(true);
    oDiv.appendChild(newDiv);
    oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
    myScroll(oDiv,left,right,a1,width);
}
scroll1();

   function scroll2() {
       var oDiv=document.getElementById("div2");
       var oInner=document.getElementById("ul1");
       var right=document.getElementById("right2");
       var left=document.getElementById("left2");
       right.onclick=function () {
           alert("1");
       };
       var a1=document.getElementById("a2").getElementsByTagName("a");
       var width=parseInt( oInner.offsetWidth);
       var newDiv=oInner.cloneNode(true);
       oDiv.appendChild(newDiv);
       oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
       myScrolls(oDiv,left,right,a1,width);
   }
scroll2();
function scroll3() {
       var oDiv=document.getElementById("div3");
       var oInner=document.getElementById("ul2");
       var right=document.getElementById("right3");
       var left=document.getElementById("left3");
       var a1=document.getElementById("a3").getElementsByTagName("a");
        var width=1232;
       var newDiv=oInner.cloneNode(true);
       oDiv.appendChild(newDiv);
       oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
       myScrolls(oDiv,left,right,a1,width);

   }
scroll3();
function scroll4() {
       var oDiv=document.getElementById("bigbox");
       var oInner=document.getElementById("boxout");
       var right=document.getElementById("moveRight");
       var left=document.getElementById("moveLeft");
       var a1=document.getElementById("a4").getElementsByTagName("a");
       var width=parseInt( oInner.offsetWidth);
       var newDiv=oInner.cloneNode(true);
       oDiv.appendChild(newDiv);
       oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
       myScrolls(oDiv,left,right,a1,width);
   }
scroll4();
function scroll5() {
       var oDiv=document.getElementById("div5");
       var oInner=document.getElementById("ul4");
       var right=document.getElementById("right4");
       var left=document.getElementById("left4");
       var a1=document.getElementById("a5").getElementsByTagName("a");
       var width=1240;
       var newDiv=oInner.cloneNode(true);
       oDiv.appendChild(newDiv);
       oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
       myScrolls(oDiv,left,right,a1,width);
   }
scroll5();
function scroll6() {
    var oDiv=document.getElementById("k-div");
    var oInner=oDiv.getElementsByTagName("div");
    var right=document.getElementById("kright");
    var left=document.getElementById("kleft");
    var a1=document.getElementById("k-a").getElementsByTagName("a");
    var width=parseInt( oInner[0].offsetWidth);
    var newDiv=oInner[0].cloneNode(true);
    oDiv.appendChild(newDiv);
    oDiv.style.width=oDiv.offsetWidth+newDiv.offsetWidth+"px";
    myScroll(oDiv,left,right,a1,width);
}
scroll6();

var weixinB=document.getElementById("weixin_detail");
var weixin=document.getElementById("weixin");
weixin.onmouseover=function () {
    weixinB.style.display="block";
};
weixin.onmouseout=function () {
    weixinB.style.display="none";
};
var loop=document.getElementById("loop-top");
var main=document.getElementById("main");
loop.onmouseover=function () {
    main.style.display="block";
};
loop.onmouseout=function () {
    main.style.display="none";
};