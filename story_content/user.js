function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6owECY5Ra4G":
        Script1();
        break;
      case "6AtRZHJmppM":
        Script2();
        break;
      case "5dTRo418SAr":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();

var d = new Date();
var o = {year:'numeric', month:'2-digit', day:'2-digit'};
var h = {hour:'2-digit', minute:'2-digit', second:'2-digit'};


 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwtWN1vcoTHZ1HbK514EtYX-fNSqug_k-14pVhqiSOVieawUwRw/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
  "FECHA" : d.toLocaleDateString('en-US', o), //STORE DATE
"HORA": d.toLocalDateString('en-US',h),
 "NOMBRE" : player.GetVar("etxtnombre"),
 "MATRICULA" : player.GetVar("etxtmatri"),
 "GRUPO" : player.GetVar("etxtgrupo"),
 "RECURSO" : player.GetVar("etxtrecurso"),
 "CALIFICACION" : player.GetVar("etxtcalificacion")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

