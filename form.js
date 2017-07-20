// JAVASCRIPT
// Variável p/ funcionamento da API bugout
var bugout = new debugout();

//Máscara dos inputs de cadastro

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
    documento.value += texto.substring(0,1);
  }
}

// JQUERY

//Pop-up de erro
$(document).ready(function(){
	var divError = document.getElementById("erro");
	$("#enviar").click(function(){
		 if($("input").val() == '') {
			$(".erro").css("display", "block");
			$("input").css("border", "1px solid #ccc");
		} else {
        	window.location.replace("button.html");
		};
	});
	//Função do arquivo JSON p/ salvar informações de localização
	$.getJSON('http://freegeoip.net/json/', function(data){
	    var latitude = data.latitude;
	    var longitude = data.longitude;
	  	bugout.log(data);
	    console.log("Latitude: " + latitude);
	    console.log("Longitude: " + longitude);   	
	  	var a = "'";
	  	var file = 'data = '+a+'[{"lat": '+ latitude +', "lng": '+ longitude +'}]'+a+';';
	  	//Função de download do log com as informações de latitude e longitude;
	  	function download(text, name, type) {
		    var a = document.createElement("a");
		    var file = new Blob([text], {type: type});
		    a.href = URL.createObjectURL(file);
		    a.download = name;
		    a.click();
		}
		download(file, 'data.json', 'text/plain');
	})
});