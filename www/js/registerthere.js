var back = document.getElementById("btnback");
back.addEventListener("click",function(){
back.removeEventListener("click",nullfunc)
location.replace("index.html");
})
var btnthere = document.getElementById("btnthere");
btnthere.addEventListener("click",function(){
var range = $("#range").val();
var uname = sessionStorage.getItem("name");
var uid = sessionStorage.getItem("id");
$.ajax({
type:'POST',
url:'http://192.168.1.11/tv/do_isthere.php',
data:{
range:range,
uname:uname,
uid:uid
},
success:function(response){
    alert(response);
    console.log(response);
    if(response=="success"){
        var androidToast = new AndroidToast();
        androidToast.show(
            'This is some nice toast popup!',
            function(msg) {
                console.log(msg);
            },
            function(err) {
                console.log(err);
            }
        );
    }
},
error:function(){
    alert("error")
}
    },
)
})
function nullfunc(){
    return;
}
// فراخوانی سشن
var a = sessionStorage.getItem("stats");
if (a == null) {
    window.location.replace("login.html");
}
var n = sessionStorage.getItem("name");
var nameuser = document.getElementById("user");
nameuser.innerHTML = n;
