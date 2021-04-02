
    var rangeValue = document.getElementById("range");
    rangeValue.addEventListener("input",function(){
        if(rangeValue.value==0){
            document.getElementById("div1").style.color = "green";
            document.getElementById("div2").style.color = "black";
            document.getElementById("div3").style.color = "black";
            
        }else if(rangeValue.value==1){
            document.getElementById("div1").style.color = "black";
            document.getElementById("div2").style.color = "green";
            document.getElementById("div3").style.color = "black";
        }else if(rangeValue.value==2){
            document.getElementById("div1").style.color = "black";
            document.getElementById("div2").style.color = "black";
            document.getElementById("div3").style.color = "green";
        }
    })
// فراخوانی سشن
var a = sessionStorage.getItem("stats");
/*if (a == null) {
    window.location.replace("login.html");
}*/



