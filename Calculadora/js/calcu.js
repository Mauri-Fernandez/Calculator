'use strict'

window.addEventListener("load",()=>{

// numeros
var n1 = document.getElementById("n1").addEventListener("click",n1);
var n2 = document.getElementById("n2").addEventListener("click",n2);
var n3 = document.getElementById("n3").addEventListener("click",n3);
var n4 = document.getElementById("n4").addEventListener("click",n4);
var n5 = document.getElementById("n5").addEventListener("click",n5);
var n6 = document.getElementById("n6").addEventListener("click",n6);
var n7 = document.getElementById("n7").addEventListener("click",n7);
var n8 = document.getElementById("n8").addEventListener("click",n8);
var n9 = document.getElementById("n9").addEventListener("click",n9);
var n0 = document.getElementById("n0").addEventListener("click",n0);

// operaciones
var suma = document.getElementById("+").addEventListener("click",suma);
var resta = document.getElementById("-").addEventListener("click",resta);
var multi = document.getElementById("*").addEventListener("click",multi);
var div = document.getElementById("/").addEventListener("click",div);

// igual , cancela , borra

var igual = document.getElementById("igual").addEventListener("click",igual);
var cancelar = document.getElementById("cancelar").addEventListener("click",cancelar);
var clear = document.getElementById("clear").addEventListener("click",clear);



function n1(){


	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	if(actual.length < 20){
			document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n2(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n3(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n3").innerHTML;

	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	
}

function n4(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n5(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n6(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n7(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	
}
function n8(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}
function n9(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;

	}
	
}
function n0(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	if(actual.length < 20){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}

// hay operacion?

function hayOperacion(){

	let actual = document.getElementById("resultado").innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("/");
	let multi = actual.indexOf("*");
	if(suma!=-1 || resta!=-1 || div!=-1 || multi!=-1){
		return true;
	}
	else return false;


}

// operaciones
function suma(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("+").innerHTML;

	if(actual.length < 20 && hayOperacion() == false ){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	
}

function resta(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("-").innerHTML;
	if(actual.length < 20 && hayOperacion() == false){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}

function multi(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("*").innerHTML;
	if(actual.length < 20 && hayOperacion() == false){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}

function div(){

	let actual = document.getElementById("resultado").innerHTML;
	let sumado = document.getElementById("/").innerHTML;
	if(actual.length < 20 && hayOperacion() == false){
		document.getElementById("resultado").innerHTML =  actual+sumado;
	}
	

}


// cancelar e igual
function cancelar(){

	let actual = document.getElementById("resultado").innerHTML;
	actual = "";
	document.getElementById("resultado").innerHTML = actual;

}

function clear(){

	let actual = document.getElementById("resultado").innerHTML;
	actual = actual.substring(0, actual.length - 1);
	document.getElementById("resultado").innerHTML = actual;

}

function igual(){

	let actual = document.getElementById("resultado").innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("/");
	let multi = actual.indexOf("*");

	if(suma!= -1){

		var arr =  new Array(); 
		arr = actual.split("+",2);
		let res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	}
	else if(resta!= -1){

		var arr =  new Array(); 
		arr = actual.split("-",2);
		let res = parseInt(arr[0]) - parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	}
	else if(div!= -1){

		var arr =  new Array(); 
		arr = actual.split("/",2);
		if(parseInt(arr[1]) == 0 ){
			alert("Error!!!"+"\n"+" No se puede dividir por 0 !!!");
			document.getElementById("resultado").innerHTML = "";
		}else{
			let res = parseInt(arr[0]) / parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
		}
		
	}
	else if(multi!= -1){

		var arr =  new Array(); 
		arr = actual.split("*",2);
		let res = parseInt(arr[0]) * parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	}


	

}












}); // fin del load


