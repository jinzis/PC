/**
 * Created by jinxin on 2016-04-27.
 */

function input() {
    var oInput = document.getElementById("input1");
    oInput.onfocus = function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    };
    oInput.onblur = function () {
        this.value = this.defaultValue;
    };
}
input();
function login() {
    var login=document.getElementById("mylogin");
    var a=login.firstElementChild;
    var oLogin=document.getElementById("login");
    a.onclick=function () {
        oLogin.style.display="block";
        new Drag(oLogin);
    };
    var oClsed=document.getElementById("closed");
    oClsed.onclick=function () {
        oLogin.style.display="none";
    }
}
login();
