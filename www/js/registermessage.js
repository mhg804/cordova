var back = document.getElementById("btnback");
back.addEventListener("click",function(){
back.removeEventListener("click",nullfunc)
location.replace("main.html");
})
var listmessage = document.getElementById("btnlistmessage");
listmessage.addEventListener("click",function(){ 
listmessage.removeEventListener("click",nullfunc)
location.replace("listmessage.html");
})
function nullfunc(){
    return;
}

