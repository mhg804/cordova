var back = document.getElementById("btnback");
back.addEventListener("click",function(){
back.removeEventListener("click",nullfunc)
location.replace("index.html");
})
var listimage = document.getElementById("btnlistimage");
listimage.addEventListener("click",function(){ 
listimage.removeEventListener("click",nullfunc)
location.replace("listimage.html");
})
var listmessage = document.getElementById("btnlistmessage");
listmessage.addEventListener("click",function(){ 
listmessage.removeEventListener("click",nullfunc)
location.replace("listimage.html");
})

function nullfunc(){
    return;
}

