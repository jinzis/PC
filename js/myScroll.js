/**
 * Created by jinxin on 4/8/2016.
 */
function myScroll(oDiv,left,right,a1,width) {
    for(var i=0,len=a1.length;i<len;i++){
        a1[i].n=i;
        a1[i].onclick=function(){
            animate(oDiv,{left:this.n*-width},800);
            step=this.n;
            changeColor(step);
            clearTimeout(autoTimer);
            autoTimer=window.setTimeout(function(){
                autoTimer= window.setInterval(autoMove,2000);
            },3000);
        }

    }
    var step=0;
    function autoMove(){
        step++;
        if(step>=len+1){
            oDiv.style.left=0;
            step=1;
        }
        if(step==len){
            changeColor(0);
        }else{
            changeColor(step);
        }
        animate(oDiv,{left:step*-width},800);
    }
    function moveRight(){
        step--;
        if(step<0){
            oDiv.style.left=-width*len+"px";
            step=len-1;
        }
        if(step==len){
            changeColor(0);
        }else{
            changeColor(step);
        }
        animate(oDiv,{left:step*-width},800);
    }
    var autoTimer=window.setInterval(autoMove,3000);
    right.onclick=function () {
        autoMove();
        clearTimeout(autoTimer);
        autoTimer=window.setTimeout(function(){
            autoTimer= window.setInterval(autoMove,2000);
        },3000);
        return false;
    };
    left.onclick=function(){
        moveRight();
        clearTimeout(autoTimer);
        autoTimer=window.setTimeout(function(){
            autoTimer= window.setInterval(autoMove,2000);
        },3000);
        return false;
    };
    function changeColor(n) {
        for(var i=0;i<a1.length;i++){
            a1[i].className="page";
        }
        a1[n].className="page on";
    }
}