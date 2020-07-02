console.log('Programa ejecutado... Esperando su siguiente orden.');

function valideKey(evt) {
var code = evt.which ? evt.which : evt.keyCode;
	if (code == 8) {
		//backspace
		return true;
	} else if (code >= 48 && code <= 57) {
		//is a number
		return true;
	} else {
		return false;
	}
}	

function plus() {
	var uno = document.getElementById('n1');
	var dos = document.getElementById('n2');
	var total;
	total = parseInt(uno.value) + parseInt(dos.value);
	if (isNaN(total)){
		document.getElementById("result").value = 'Operación no válida.'
	}else {
		document.getElementById("result").value = total;
	}
}

function less() {
	var uno = document.getElementById('n1');
	var dos = document.getElementById('n2');
	var total;
	total = parseInt(uno.value) - parseInt(dos.value);
	if (isNaN(total)){
		document.getElementById("result").value = 'Operación no válida.'
	}else {
		document.getElementById("result").value = total;
	}
}

function mult() {
	var uno = document.getElementById('n1');
	var dos = document.getElementById('n2');
	var total;
	total = parseInt(uno.value) * parseInt(dos.value);
	if (isNaN(total)){
		document.getElementById("result").value = 'Operación no válida.'
	}else {
		document.getElementById("result").value = total;
	}
}

function split() {
	var uno = document.getElementById('n1');
	var dos = document.getElementById('n2');
	total = parseInt(uno.value) / parseInt(dos.value);
	if (total == Infinity){
		document.getElementById("result").value = 'No se puede operar con cero.';
	}
	else if (isNaN(total)){
		document.getElementById("result").value = 'Operación no válida.'
	} else {
		document.getElementById("result").value = total;
	}
}