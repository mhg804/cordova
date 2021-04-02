var back = document.getElementById("btnback");
back.addEventListener("click",function(){
back.removeEventListener("click",nullfunc)
location.replace("main.html");
})
var listprogram = document.getElementById("btnlistprogram");
listprogram.addEventListener("click",function(){ 
listprogram.removeEventListener("click",nullfunc)
location.replace("listprogram.html");
})
function nullfunc(){
    return;
}

