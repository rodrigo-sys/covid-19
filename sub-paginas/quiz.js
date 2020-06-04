const $botonEnviarRespuestas = document.querySelector("#botonEnviarRespuesta");
$botonEnviarRespuestas.onclick = function(){
	main();
	return false;
}

function main(event){
	

	let cantidad_aciertos = 0;
	let cantidad_errores = 0;
	let respuestas_correctas = document.querySelectorAll("input[value='respuesta_correcta']");

	for(i=0; i < respuestas_correctas.length; i++){
		if(respuestas_correctas[i].checked){
			cantidad_aciertos++;
		}
		else{
			cantidad_errores++;
		}
	}


	let cantidad_preguntas = respuestas_correctas.length //porque cada pregunta tiene una respuesta correcta
	let porcentaje_aciertos = (100 / cantidad_preguntas) * cantidad_aciertos;
	let porcentaje_errores = (100 / cantidad_preguntas) * cantidad_errores;

	console.log(`cantidad_aciertos: ${cantidad_aciertos}`);
	console.log(`cantidad_errores: ${cantidad_errores}`);
	console.log(`Porcentaje de aciertos: ${porcentaje_aciertos}`);
	console.log(`Porcentaje de errores: ${porcentaje_errores}`);

	if(porcentaje_aciertos > 1){
		if(porcentaje_aciertos <= 40){
			var mensaje = "Debe ponerse a estudiar más <b>-desastre-</b>";
		}
		else if(porcentaje_aciertos <= 69){
			var mensaje = "Esta bien pero debe ponerse a estudiar más <b>-regular-</b>";
		}
		else if(porcentaje_aciertos === 70){
			var mensaje = "Buenas respuestas <b>-bueno-</b>";
		}
		else if(porcentaje_aciertos > 70){
			var mensaje = "Muy buenas respuestas";
		}
	}
	else{
			var mensaje = "todo mal";
	}

	bootbox.alert(mensaje);
}
