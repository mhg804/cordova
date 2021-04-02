var submitbtn = document.getElementById("btnsubmit");
submitbtn.addEventListener("click",do_login);
function do_login(){
 var username=$("#unbtn").val();
 var pass=$("#pwbtn").val();
 if(username!="" && pass!="")
 {
  //$("#loading_spinner").css({"display":"block"});
  $.ajax({
  type:'post',
  url:'http://192.168.1.11/tv/do_login.php',
  data:{
  username:username,
   password:pass
  },
  cache:false,
  success:function(response) {
    console.log(response);
    var obj = JSON.parse(response);
  if(obj.status=="success")
  {
    sessionStorage.setItem('id', obj.id);
    sessionStorage.setItem('username', obj.username);
    sessionStorage.setItem('name', obj.name);
    sessionStorage.setItem('stats', obj.status);
    window.location.href="index.html";
  }
  else
  {
   // $("#loading_spinner").css({"display":"none"});
    alert("Wrong Details");
  }
  }
  });
 }

 else
 {
  alert("Please Fill All The Details");
 }

 return false;
}
