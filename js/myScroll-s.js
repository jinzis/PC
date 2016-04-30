/**
 * Created by jinxin on 4/8/2016.
 */
function myScrolls(oDiv,left,right,a1,width) {
    for(var i=0,len=a1.length;i<len;i++){
        a1[i].n=i;
        a1[i].onclick=function(){
            animate(oDiv,{left:this.n*-width},1000);
            step=this.n;
            changeColor(step);
        }
    }
    var step=0;
    function moveLeft(){
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
        animate(oDiv,{left:step*-width},1000);
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
        animate(oDiv,{left:step*-width},1000);
    }
    right.onclick=function () {
        moveLeft();
        return false;
    };
    left.onclick=function(){
        moveRight();
        return false;
    };
    function changeColor(n) {
        for(var i=0;i<a1.length;i++){
            a1[i].className="page";
        }
        a1[n].className="page on";
    }
}