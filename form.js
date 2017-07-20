// JAVASCRIPT

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

//Pop-up de erro e redirecionamento de sucesso
$(document).ready(function(){
	var divError = document.getElementById("erro");
	$("#enviar").click(function(){
		 if($("input").val() == '') {
			$(".erro").css("display", "block");
			$("input").css("border", "1px solid #ccc");
		} else {
        	window.location.replace("solicitante.html");
		};
	});
});