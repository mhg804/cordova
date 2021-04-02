    var isthere = document.getElementById("btnthere");
    isthere.addEventListener("click",function(){
        isthere.removeEventListener("click",nullfunc());
location.replace("isthere.html");
    })
    var img = document.getElementById("btnimage");
    img.addEventListener("click",function(){
        img.removeEventListener("click",nullfunc());
location.replace("registerimage.html");
    })

    var message = document.getElementById("btnmessage");
    message.addEventListener("click",function(){
        message.removeEventListener("click",nullfunc());
location.replace("registermessage.html");
    })
    function nullfunc(){
        return;
    }
    var program = document.getElementById("btnprogram");
    program.addEventListener("click",function(){
        program.removeEventListener("click",nullfunc());
location.replace("registerprogram.html");
    })
    function nullfunc(){
        return;
    }
// فراخوانی سشن
var a = sessionStorage.getItem("stats");
if (a == null) {
    window.location.replace("login.html");
}else{
    console.log(a);
}
var n = sessionStorage.getItem("name");
var nameuser = document.getElementById("user");
nameuser.innerHTML = n;


